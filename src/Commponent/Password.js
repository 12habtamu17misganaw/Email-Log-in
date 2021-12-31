import React from "react";
//import { TextField } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { FcGoogle } from "react-icons/fc";
import PublicIcon from "@material-ui/icons/Public";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Password = () => {
  const [check, setCheck] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handelCheck = (prop) => (event) => {
    setCheck({ ...check, [prop]: event.target.value });
  };

  const handelCheckPassword = () => {
    setCheck({ ...check, showPassword: !check.showPassword });
  };

  const handelCheckMouse = (event) => {
    event.preventDefault();
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

 
  return (
    <div >
      <div className="Logo">
        <h1 className="logo">W</h1>
      </div>
      <div className="titel-log">
        <h1 className="titel-log-h1">Log in to your account</h1>
      </div>
      <div className="login-center">
        <a href="#" className="password-center-a">
          <p className="mb-2">
            {" "}
            <ArrowBackIcon /> Change Username
          </p>
        </a>
        <div className="user-password-div">
        <TextField
          type="email"
          margin="dense"
          variant="outlined"
          className="username-password mt-0 mb-2"
        />
        </div>
        <div className="password-div" >
          <div className="Password">
            <p className="mb-0 p-password">Password</p>
          </div>
          <div className="user-password-div" >
          <FormControl
            className="username-password mb-3"
            variant="outlined"
            margin="dense"
            id="1"
          >
            <OutlinedInput
              type={check.showPassword ? "text" : "password"}
              value={check.password}
              onChange={handelCheck("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handelCheckPassword}
                    onMouseDown={handelCheckMouse}
                    edge="end"
                  >
                    {check.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          </div>
          <div className="user-password-div">
            <div className="Password">
          <p className="mb-2 p-password">Check password</p>
          </div>
          <FormControl className="username-password mb-3 mt-0 mb-3" variant="outlined" margin="dense" id = '2'>
              <OutlinedInput
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

          </div>

        </div>
        <div className="service">
          <p className="password-center-by">
            By creating an account, you agree to our{" "}
            <a href="#">Terms of service</a>
          </p>
        </div>

        <div className="password-login">
          <button  className="password-second-button">
            Log in
          </button>

          <div className="line-file-log">
            <div className="line-log"></div>
            <p className="or-log">OR</p>
            <div className="line-log"></div>
          </div>
          <div className="other">
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
          <div className="password-account">
            <button className="password-button">
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

export default Password;
