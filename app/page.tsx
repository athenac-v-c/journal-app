'use client'
import { SetStateAction, useState } from "react";
import Image from "next/image";
import RichTextEditor from "@/components/ui/rich-text-editor";
import Login from "@/components/ui/login";
import Dashboard from "./dashboard/page";
import "./page.css"
export default function Home() {
  /*const [post,setPost] =useState('')
  const onChange=(content: string)=>{
    //setPost(e.target.value);
    setPost(content)
    console.log(content)
  }*/
  const [showLogin, setShowLogin] = useState(false)

  const handleLogin = ()=>{
    setShowLogin(true)
  }
  return (
    
    <div >
     
     { /*<RichTextEditor content={post} onChange={onChange}/> */}
      <header>
     
      <nav>
        <a href = "./">Home</a>
        <a href = "./about">About</a>
        <a href="#" >Contact</a>
      </nav>
      </header>
      <div className="container">
         
         
          <div className="content">
            <h2>Blog</h2>
            <br>
            </br>
            <h2> Welcome <br></br><span>to Bloomlog website</span></h2>
              <br>
              </br>
              
              <br>
              </br>
              <p>Record your days, one thought at a time.
A quiet space to capture moments, memories, and moods.</p>

          </div>
          <div className="login-signup-ui">
            
               <Login />
            
           
          </div>

      </div>
    
    </div>
    
  
  );
}
