import React, { useState } from "react";
import { loginformValidation } from "../../utils/formValidation";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { Email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/Home");
        }
      })
      .catch((err) => console.log(err));

    const result = loginformValidation(Email, password);
    setError(result);
  };
  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              type="Email"
              id="Email"
              value={Email}
              autoComplete="off"
              className={`${error.Email && "error"}`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="Email"
              className={Email.length > 0 ? "validPlaceHolder" : "placeHolder"}
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
              className={`${error.password && "error"}`}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="forgotAndReg">
          <p className="forgot">
            <a href="/forgot" target="_blank">
              Forgot password ?{" "}
            </a>
          </p>
          <p>
            Not have an account ?<Link to={"/register"}>Register</Link>
          </p>
        </div>
        <Link to="/Home">
          <input type="submit" value="Login" className="button_log" />
        </Link>
      </form>
    </div>
  );
};

export default Login;
