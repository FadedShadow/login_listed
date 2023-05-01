import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";

import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      <div className="left">
        <h1 className="heading">Board.</h1>
      </div>
      <div className="other">
        <div className="rightside">
          <h2 className="right">Sign In</h2>
          <h5 className="signhd">Sign in to your account</h5>
        </div>
        <div class="px-6 sm:px-0 max-w-sm">
          <button
            type="button"
            class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign up with Google<div></div>
          </button>
        </div>

        <div className="btn">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <div>
          <button type="button" className="apple">
            <AppleIcon /> Sign in with Apple
          </button>
        </div>
        {/* <div>
          <form className='form'>
      <label>Enter your name:
        <input type="text" />
      </label>
      
      <label className='passw'>Enter your Password:
        <input type="password" />
      </label>
      <label className='submit'>Sign In:
        <input type="submit" />
      </label>
    </form> */}

        {/* </div> */}
        <div className="loginForm">
          <form action="">
            <label htmlFor="">Email address</label>
            <input type="email" name="email" />
            <label htmlFor="">Password</label>
            <input type="password" name="password" />
            <p>Forgot password?</p>
            <NavLink to="/dash">
              <button type="submit">Sign in</button>
            </NavLink>
          </form>
        </div>
        <div className="register">
          <p>
            Don't have an account? <span>Register here</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
