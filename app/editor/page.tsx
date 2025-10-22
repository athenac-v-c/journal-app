'use client'
import {useState } from "react";
import RichTextEditor from "@/components/ui/rich-text-editor";

export default function Editor() {
  const [post,setPost] =useState('')
  const onChange=(content: string)=>{
    //setPost(e.target.value);
    setPost(content)
    console.log(content)
  }
  const handleSubmit = async(e:React.FormEvent) =>{

      e.preventDefault()
      try{
          const res = await fetch('/api/notes',{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({content:post})
          })
          const data = await res.json()
          console.log("note saved",data)
          alert('your post is saved')
        }catch(err){
          console.log('Error', err)
        }
  }
  return (
    
    <div className="max-w-5xl max-w-5xl mx-auto py-8 ">
        <form onSubmit={handleSubmit}>
          
          <RichTextEditor content={post} onChange={onChange}/>
          <button type="submit">save</button>
        </form>
        <a href="/dashboard">back to dashboard</a> 
    </div>
  
   
    
  
  );
}