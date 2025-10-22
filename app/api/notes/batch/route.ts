import { NextResponse } from "next/server";
import {Redis} from "@upstash/redis"

//fetch all notes from Redis, parse them into JSON, and then return them all in one response
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL!,
    token:process.env.UPSTASH_REDIS_TOKEN!,
})

export async function POST(req:Request) {
    const {noteIds} = await req.json()
    if(!noteIds || Array.isArray(noteIds)){
        return NextResponse.json(
            {success:false, message:"Invalid noteIds"}
        )
    }
    const pipeline = noteIds.map((id:string) => redis.get(id))
    const results = await Promise.all(pipeline)
    const notes = results.map((r) =>(r ? JSON.parse(r):null)).filter(Boolean)
    return NextResponse.json({success:true, notes})
    
}