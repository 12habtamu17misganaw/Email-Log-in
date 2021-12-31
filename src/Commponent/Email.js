import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AppleIcon from '@material-ui/icons/Apple';
import {FcGoogle} from "react-icons/fc"
import Login from "../Login";
import { Link } from "react-router-dom";




const Email = () => {
  const[text,setText] = useState({Login})
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
  const handelClick = () => {
    if (text === {Login}) {
      setText({Login})
    } else {
      setText ({Login})
    }

  }

  return (
    <div>
      <div className="Logo">
        <h1 className="logo">W</h1>
      </div>
      <div className="titel">
        <h1>Let's get started</h1>
        <p>
          First, Create Your WordPress.com account. Have an account?{" "}
          <a href="login">Login</a>
        </p>
      </div>

      <div className="container">
        <div className="row row-1">
          <div className="col-lg-4 col-md-6 col-sm-12 row-1">
            <p>Your email address</p>
            <TextField
             
              type="email"
              margin="dense"
              variant="outlined"
              className="username mt-0 mb-3"
            />
            <p>username</p>
            <TextField
              type="name"
              margin="dense"
              variant="outlined"
              className="username mt-0 mb-3"
            />
            <p>Choose password</p>

            <FormControl className="username mt-0 mb-3" variant="outlined" margin="dense" id = '2'>
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
            <p>Check password</p>
            <FormControl className="username mb-3" variant="outlined" margin="dense" id='1'>
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

               


            <div className="service">
              <p>
                By creating an account, you agree to our{" "}
                <a href="#">Terms of service</a>
              </p>
            </div>
            <div className="button-1">
              <button className="button-1">Create Your Account</button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 row-2">
            <div className="line-fil">
              <div className="line"></div>
              <p className="or">OR</p>
              <div className="line"></div>
            </div>
           <div className="other">
            <div className="google">
              <a href="#" className="circle">
              <FcGoogle />
              </a>
              <a href="#" className="text-Appl">
                Continue with Google
              </a>
            </div>
            <div className="appl">
              <a href="#" className="circle-appl">
               < AppleIcon />
              </a>
              <a href="#" className="text-google">
                Contiue with Apple
              </a>
            </div>
           </div>
            <div className="text-last">
              <p className="paragraph pt-0">
                if you continue with Google or Apple and don't already have a
                WordPress.com account, you are creating an account and you agree
                to our{" "}
                <a href="#" className="last-link">
                  Terms of Service
                </a>
              </p>
            </div>
            
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Email;
