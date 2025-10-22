'use client'
import {useState } from "react";
import Login from "@/components/login";
import "./page.css"
import SignUp from "@/components/sign-up";
export default function Home() {
  /*const [post,setPost] =useState('')
  const onChange=(content: string)=>{
    //setPost(e.target.value);
    setPost(content)
    console.log(content)
  }*/
  const [showLogin, setShowLogin] = useState(false)

  /*
  const handleLogin = ()=>{
    setShowLogin(true)
  }
    */
  const handleToggle = () => setShowLogin(!showLogin)

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
      <div className="background"></div>
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
               
               {/*<Login onToggle={handleToggle}/> 
               <SignUp onToggle={handleToggle}/>  */}
               {showLogin ? (
              <Login onToggle={handleToggle} />
              ) : (
               <SignUp onToggle={handleToggle} />
                )}
          </div>
      </div>
    
    </div>
  );
}
