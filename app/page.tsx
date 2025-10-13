'use client'
import { SetStateAction, useState } from "react";
import Image from "next/image";
import RichTextEditor from "@/components/ui/rich-text-editor";
import Login from "./auth/login/page";
export default function Home() {
  const [post,setPost] =useState('')
  const onChange=(content: string)=>{
    //setPost(e.target.value);
    setPost(content)
    console.log(content)
  }
  return (
    
    <div className="max-w-5xl max-w-5xl mx-auto py-8 ">
     
     { /*<RichTextEditor content={post} onChange={onChange}/> */}
     <Login />
    
    </div>
    
  
  );
}
