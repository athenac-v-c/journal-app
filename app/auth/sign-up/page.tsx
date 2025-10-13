'use client'
import "../page.css"
import { useState } from "react"


export default function SignUp(){
    type User={
       username:string,
       password:string
    }
    const [User,setUser] = useState<User|null>(null)
    const getUser = () =>{


        
    }

    return(
     <>
        <div className="form">
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
                />
            </div>
            </div>
            <div >
                <button id='btn' >
                    sign up
                </button>
            </div> 
        </div>
    </>

    )

}