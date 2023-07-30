import React from "react";
import loginImg from "../../Assets/login.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = ({ onRegister, OnReset, onTogglePassword, onShowPassword }) => {
  return (
    <div className="main-container --flex-center">
      <div className="img-container">
        <img src={loginImg} alt="login" />
      </div>
      <div className="form-container">
        <form className="--form-control">
          <h2
            className="--color-danger"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Login
          </h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <div className="password">
            <input
              type={onShowPassword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
            />
            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <button className="--btn --btn-primary --btn-block ">Login</button>
          <a href="##" className="--text-sm" onClick={OnReset}>
            Forgot Password
          </a>
          <span className="--text-sm --block">
            Don't have an account?{" "}
            <a href="##" style={{ color: "blue" }} onClick={onRegister}>
              Register
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

// import loginImg from "../../Assets/login.svg";
export default Login;
