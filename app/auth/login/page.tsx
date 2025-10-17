'use client'
import React, { useState } from 'react'
import '../page.css'
import Link from 'next/link'
export default function Login(){

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
    
            const response = await fetch('/api/auth/login',{
                method:"POST",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({username, password})
            });
            const data = await response.json();
            console.log(data);
            if(response.ok){
                console.log("Found user in db");
                window.location.href = data.redirect || '/dashboard';
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
    <>
        <div className="form">
            <div>
                <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
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
                    onChange={getUsername}
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
                    onChange={getPassword}
                />
            </div>
            </div>
            <div >
                <button id='btn' type = 'submit'>
                    submit
                </button>
            </div>
            </form>
            <div >
                <Link href="/auth/sign-up" id='go-sign-up'>
                    Dont have an account, click to sign up
                </Link>
            </div>
        </div>

    </>


  )

}
