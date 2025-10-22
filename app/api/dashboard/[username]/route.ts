import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {Redis} from "@upstash/redis"

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL!,
    token:process.env.UPSTASH_REDIS_TOKEN!,
})
interface Dashboard{
    ownerEmail:string;
    noteIds: string[];
}
export async function GET(req:NextRequest,context:{ params:{ username:string} }): Promise<Response> {


    const {username} = context.params
    const {searchParams} = new URL(req.url)
    const email = searchParams.get("email")

    if(!email){
        return NextResponse.json({success:false, message:"Email missing"})
    }
    
    //change for type-safe
    const dashboardRawData = await redis.get("dashboards")
    //const dashboards = JSON.parse((await redis.get("dashboards")) || "[]")
    const dashboards = dashboardRawData ? JSON.parse(dashboardRawData as string) : [];
    const dashboard = dashboards.find((d:Dashboard) => d.ownerEmail === email)


    if(!dashboard){

        return NextResponse.json(
            {success:false, message:`${email}'s dashboard not found`}
        )
    }
    return NextResponse.json({
        success:true,
        username,
        noteIds:dashboard.noteIds
    })   
}
