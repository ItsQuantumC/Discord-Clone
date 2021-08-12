import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));

    }
    return (
        <div className="login">
            

            <div className="login__logo">
                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/141980884/original/3398c9a54fb83b223fd4153e88be7908f1bec71e/build-you-basic-discord-bot.png" alt=""/>
            </div>

            <Button onClick={signIn}>SignIn</Button>
            
        </div>
    )
}

export default Login
