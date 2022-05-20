import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../components/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function signIn() {}
  function register() {}
  function google() {
    window.open("http://localhost:3000/auth/google", "_self");
  }

  function github() {
    window.open("http://localhost:3000/auth/github", "_self");
  }
  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <hr className="line_Break"></hr>
        <div className="loginButton_google" onClick={google}>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
            className="icon"
          />
          <h4>Google</h4>
        </div>
        <div className="loginButton_git" onClick={github}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
            className="icon"
          />
          <h4>Git Hub</h4>
        </div>
        <div className="loginButton_facebook" onClick={google}>
          <img
            src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
            alt=""
            className="icon"
          />
          <h4>Facebook</h4>
        </div>

        <p>
          By signing-in you agree to the Moview Conditions of Use & Publish.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <NavLink to="">
          <button onClick={register} className="login__registerButton">
            Create your Moview Account
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
