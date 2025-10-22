'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"


const router = useRouter()
/*
type User={
       username:string;
       password:string;
       email:string
    }
 */

export default function SignUp({onToggle}:{onToggle:() => void}){
    
    //const [User,setUser] = useState<User|null>(null)
    
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    
    /*const handleSignUp = (e:React.FormEvent)=>{
      
        e.preventDefault();// form submission will reload the page since it sends a request and clears everything, this prevents reloading behavior
        
        //get the username and password from submitted form and store it into new user object
        const newUser: User = {username, password}

        console.log('New user created:', newUser)

    }*/
    const handleSignUp = async(e:React.FormEvent) =>{
            //prevent  window from reloading
            e.preventDefault()
    
            try{
        
                const response = await fetch('/api/auth/users',{
                    method:"POST",
                    headers:{'Content-type':'application/json'},
                    body:JSON.stringify({username:username, email:email,password:password,action:"SIGNUP"})
                })
                const data = await response.json()
                console.log(data)
                if(data.success){
                    //to-do: redirect to login 
                    return
                }
                
            }
            catch(err){
                console.log('Error',err)
    
            }
    
        }
    return(
        <div className="form-box register">
            <form  onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                <div className="input-box">
                    <input
                        type='text' 
                        name='username'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <label>Username</label>
                    <span className="icon"><i className='bxr  bx-user'  ></i> </span>
                </div>
                
                <div className="input-box">
                    <input
                        type='email' 
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label>Email</label>
                    <span className="icon"><i className='bxr  bx-envelope-alt'  ></i> </span>
                </div>
                <div className="input-box">
                    <input 
                        type='password' 
                        name='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <label>Password</label>
                    <span className="icon"><i className='bxr  bx-lock'  ></i></span>
                </div>
                <button className='btn' type = 'submit'>
                    Sign Up
                </button>
                
  
                
          </form>
           <div>
                <button className="signup-login-btn" onClick ={onToggle}>Already have an account? click to sign in</button>
           </div>
        </div>
  

    )

}