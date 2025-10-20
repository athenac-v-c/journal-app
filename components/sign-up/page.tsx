'use client'
import "../page.css"
import { useState } from "react"

type User={
       username:string;
       password:string;
    }

export default function SignUp(){
    
    //const [User,setUser] = useState<User|null>(null)
    
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')
    
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
        
                const response = await fetch('/api/auth/sign-up',{
                    method:"POST",
                    headers:{'Content-type':'application/json'},
                    body:JSON.stringify({username, password})
                })
                const data = await response.json()
                console.log(data)
            }
            catch(err){
                console.log('Error',err)
    
            }
    
        }

    return(
     <div className="max-w-5xl max-w-5xl mx-auto py-8">
     <form className="form" onSubmit={handleSignUp}>
       
            <div>
                <h1>Create a new account</h1>
            </div>

            <div>

            <div className=''>
                <label htmlFor='username'>
                    Username:
                </label>
            </div>
            <div>
                <input
                    className='inputBox'
                    id='username' 
                    type='text' 
                    name='username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            </div>

            <div>
            <div>
                <label htmlFor='password'>
                    Password:
                </label>
            </div>
            <div>
                <input 
                    className='inputBox'
                    id='password' 
                    type='password' 
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            </div>
            <div >
                <button id='btn' type="submit">
                    sign up
                </button>
            </div> 
          </form>
        </div>
  

    )

}