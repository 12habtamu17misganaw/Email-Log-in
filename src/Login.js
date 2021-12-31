import React from "react";
import { TextField } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { FcGoogle } from "react-icons/fc";
import PublicIcon from "@material-ui/icons/Public";

const Login = () => {
  return (
    <div className="first-div">
      <div className="Logo">
        <h1 className="logo">W</h1>
      </div>
      <div className="  titel-log">
        <h1 className="titel-log-h1">Log in to your account</h1>
      </div>
      <div className="login-center">
        <p className="login-center-p">Emaill Address or Username</p>
         <div className="user-logo-div">
        <TextField
          type="email"
          margin="dense"
          variant="outlined"
          className="username-log mt-0 mb-3"
        />
        </div>
        <div className="service">
          <p className="p-1">
            By Continuing, you agree to our{" "}
            <a href="#">Terms of service</a>
          </p>
        </div>

        <div className="button-login">
          <button  className="login-first-button">
            Continue
          </button>

          <div className="line-file-log">
            <div className="line-log"></div>
            <p className="or-log">OR</p>
            <div className="line-log"></div>
          </div>
          <div className="other-logo">
            <div className="google-log">
              <a href="#" className="circle-log">
                <FcGoogle />
              </a>
              <a href="#" className="text-Appl">
                Continue with Google
              </a>
            </div>
            <div className="appl-log">
              <a href="#" className="circle-appl">
                <AppleIcon />
              </a>
              <a href="#" className="text-google">
                Contiue with Apple
              </a>
            </div>
          </div>
          <div className="text-last">
            <p className="paragraph-log pt-0">
              If you continue with Google or Apple and don't already have a
              WordPress.com account, you are creating an account and you agree
              to our{" "}
              <a href="#" className="last-link">
                Terms of Service
              </a>
            </p>
          </div>
          <div className="creat-account">
            <button className="creat-button">
              <a href="#">Creat a new account</a>
            </button>
          </div>
          <div className="Email-me-log">
            <a href="#">
              <p>Email me a login link</p>
            </a>
          </div>
          <div className="one-line"></div>
        </div>
      </div>
      <div className="lost-log">
        <a href="#">
          <p className="lost-log-p">Lost Your Password?</p>
        </a>
      </div>
      <div className="last-world">
        <p>
          {" "}
          <PublicIcon /> Would you like to help us translate WordPress.com into{" "}
          <a href="#">Amharic</a>?{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
