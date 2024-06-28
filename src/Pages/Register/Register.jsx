import  { useState } from "react";
import "./register.css";
// import { CiUser } from "react-icons/ci";
import { BsEyeSlash, BsEye } from "react-icons/bs";

import { registerformValidation } from "../../utils/formValidation";
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [showpassword, setShowPassword] = useState(false);
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register",{username,Email,password,confirmPassword})
    .then(result=> {console.log(result)
      navigate("/login")
    })
    .catch(err=>console.log(err))

    setError({});
    setTimeout(() => {
      const results = registerformValidation(
        username,
        Email,
        password,
        confirmPassword
      );
      setError(results);
    }, 3000);
  };
  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              className={`${error.username && "error"}`}
              type="text"
              id="name"
              value={username}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label
              htmlFor="name"
              className={
                username.length > 0 ? "validPlaceHolder" : "placeHolder"
              }
            >
              Name
            </label>
          </div>
          {error.username && <span>{error.username}</span>}
        </div>
        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              type="Email"
              id="Email"
              value={Email}
              className={`${error.Email && "error"}`}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="Email"
              className={
                Email.length > 0 ? "validPlaceHolder" : "placeHolder"
              }
            >
              Email
            </label>
          </div>
          {error.Email && <span>{error.Email}</span>}
        </div>
        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              type={showpassword ? "text" : "password"}
              id="password"
              value={password}
              autoComplete="off"
              className={`${error.password && "error"}`}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="password"
              className={
                password.length > 0 ? "validPlaceHolder" : "placeHolder"
              }
            >
              password
            </label>
            <div
              className="showpassword"
              onClick={() => setShowPassword(!showpassword)}
            >
              {showpassword ? (
                <BsEye className="showIcon" />
              ) : (
                <BsEyeSlash className="showIcon" />
              )}
            </div>
          </div>
          {error.password && <span>{error.password}</span>}
        </div>
        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              type={showpassword ? "text" : "password"}
              id="confirmPassword"
              autoComplete="off"
              value={confirmPassword}
              className={`${error.confirmpassword && "error"}`}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label
              htmlFor="confirmPassword"
              className={
                confirmPassword.length > 0 ? "validPlaceHolder" : "placeHolder"
              }
            >
              Confirm Password
            </label>
          </div>
          {error.confirmpassword && <span>{error.confirmpassword}</span>}
        </div>
        <div className="terms">
          <p>
            By registering your account, you accept{" "}
            <a href="">Terms and Conditions </a>of the site.
          </p>
        </div>
        <input type="submit" value="Register" className="button_log" />
        <p>Already have an Account?</p>
        {/* <input type="submit" value="login" className="button_log"/> */}
        <Link to="/login">
        <input type="submit" value="login" className="button_log"/> 
        </Link>
        </form>
    </div>
  );
};

export default Register;
