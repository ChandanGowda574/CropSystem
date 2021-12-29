import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {

    

    return (
        <div className='login'>
            <Link to= '/'>
            <img 
            className='login_logo' 
            src="https://thumbs.dreamstime.com/z/agriculture-logo-template-design-icon-sign-symbol-farm-nature-ecology-vector-flat-81688732.jpg " 
            alt='Logo'
            />
            </Link>

            <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail/Phone-number</h5>
                <input type='text'  />

                <h5>password</h5>
                <input type='password' 
                />

                <button 
                className='login_signInButton'>Sign In</button>

            </form>
            <p ><small>By signing-in you agree to Agriculture Crop System's
                condition to Use & Sale.Please see our Privacy Notice,
                and our Interest-Based Ads Notice.</small>
                
            </p>
            <Link to='/signup'>
            <button 
            className='login_signUpButton'>Sign Up</button>
            </Link>
            

            </div>
            

        </div>
    )
}

export default Login
