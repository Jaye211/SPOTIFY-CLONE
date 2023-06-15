import React from 'react'
import "./Login.css";
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
        
        <img src="https://www.mindphp.com/images/content/2017-02/Spotify-logo.jpg" alt=''/>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

    </div>
  )
}

export default Login