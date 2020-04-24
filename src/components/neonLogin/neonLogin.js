import React, {useState, useEffect} from 'react'
import './neonLogin.css';



const NeonLogin = () => {


    return (
        <div className="neon-login">
            <input placeholder="Username"
                    type="text"
                    className="username-input"></input>
            <input placeholder="Password"
                    type="password"
                    className="password-input"></input>
            <div className="login-form">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                login
            </div>
            
            
        </div>
    )
    
}

export default NeonLogin;

