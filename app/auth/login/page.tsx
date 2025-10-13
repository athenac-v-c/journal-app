'use client'
import '../page.css'
import Link from 'next/link'
export default function Login(){



  return(
    <>
        <div className="form">
            <div>
                <h1>Login</h1>
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
                <button id='btn'>
                    submit
                </button>
            </div>
            <div >
                <Link href="/auth/sign-up" id='go-sign-up'>
                    Dont have an account, click to sign up
                </Link>
            </div>
        </div>

    </>


  )

}
