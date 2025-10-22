'use client'
import React, { useState } from 'react'

import Link from 'next/link'
import { useRouter } from "next/navigation"



const router = useRouter()

export default function Login({onToggle}:{onToggle:() => void}){

    const [username, setUsername] = useState<string|null>('')
    const [password,setPassword] = useState<string|null>('')

    const getUsername = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
    }
    const getPassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }


    const handleSubmit = async(e:React.FormEvent) =>{
        //prevent  window from reloading
        e.preventDefault()

        try{
            const response = await fetch('/api/auth/users',{
                method:"POST",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({action:"LOGIN",username:username, password:password})
            });
            const data = await response.json();
            console.log(data);
            /*
            if(response.ok){
                console.log("Found user in db");
                window.location.href = data.redirect || '/dashboard';
            */
            if(data.success){
                    localStorage.setItem("user", JSON.stringify(data.user))
                    router.push("/dashboard")
            }else{
                console.warn('Login falied', data.message);
                alert(data.message || "Login falied, please check your account");
            }
        }catch(err){
            console.log('Error during the Login',err);
            alert('Something went wrong. Please try again later.');
        }
    }

  return(
        <div className="form-box login">
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <div className='input-box'>
                    <input
                        type='email' 
                        name='email'
                        onChange={getUsername}
                        required
                    />
                    <label>Email</label>
                    <span className='icon'><i className='bxr  bx-envelope-alt'  ></i> </span>
                    
                </div>
            <div className='input-box'>
                <input 
                    type='password' 
                    name='password'
                    onChange={getPassword}
                    required
                />
                <label>Password</label>
                <span className = "icon"><i className='bxr  bx-lock'  ></i> </span>
                
            </div>
            <div className="remember-forgot">
                <label> <input type="checkbox"/>Remember me</label>
                <a href = "#"> Forget password?</a>

            </div>
                <button className='btn' type = 'submit'>
                    Sign In
                </button>
            </form>
            <div>
                <button className="signup-login-btn" onClick={onToggle}>Don't have an account?</button>
            </div>
        </div>
  )

}
