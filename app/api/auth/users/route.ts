import { NextResponse } from "next/server";
import {Redis} from "@upstash/redis"

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL!,
    token:process.env.UPSTASH_REDIS_TOKEN!,
})

interface User{
    id:string,
    username?:string,
    email:string,
    password:string
}
export async function POST(req:Request){
       
    const {username, email, password, action} = await req.json()

    //retrieve users table from redis
    const users = JSON.parse((await redis.get("users")) || "[]")

    //ESLint issue on Vercel
    //const existingUser = users.find((u:any) => u.email === email)
    const existingUser = users.find((u:User) => u.email === email)

    //SIGNUP
    if ( action === "SIGNUP" ){

        // check if any missing fields out there
        if ( !username || !password || !email){
            return NextResponse.json(
                {success: false, message:"Missing username, email or password"},
                {status:400}
            )
         
        }
        if (existingUser){

            return NextResponse.json(
                {success:false, message:"User already exists"},
                {status:400}
            )
        } 

        //create a new user

        const newUser = {id:Date.now().toString(), username, email,password}
        users.push(newUser)
        
        //update the current users table in redis
        await redis.set(users, JSON.stringify(users))


       
        //create dashboard for new user
        //const dashboards = JSON.parse((await redis.get("dashboards")) || "[]")
        const dashboardRawData = await redis.get("dashboards")
        const dashboards = dashboardRawData ? JSON.parse(dashboardRawData as string) : [];
        dashboards.push({"ownerEmail":email,"noteIds":[]})

        await redis.set("dashboards",JSON.stringify( dashboards))

        //return the message to client side
        return NextResponse.json({
            success:true,
            message:"User created successfully,you can sign in now",
            user:newUser,
            action:"SIGNUP"

        })





        
    }   


    //LOGIN

    if( action === "LOGIN"){

        //check if any is missing
        if(!email || !password){
            return NextResponse.json(
                {success:false, message:"Missing email or password"},
                {status:400}
            )
        }

        //check if the user not exist in users
        if(!existingUser){
            return NextResponse.json(
                {success:false, 
                 message:"User does not exist, please sign up first",
                 needSignup:true
                },

            )
        }

        //if wrong password

        if(existingUser.password !== password){
            return NextResponse.json(

                {success:false, messsage:"Incorrect password"},
                {status:401}

            )
        }
        
        return NextResponse.json(
            {success:true,
             message:"Login successfully",
             user:existingUser,
             action:"LOGIN"
            },
            
        )
    }

    //if any invalid action
    return NextResponse.json(
        {success:false, message:"invalid action"},
        {status:400}
    )

}