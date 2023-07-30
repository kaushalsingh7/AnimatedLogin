import React, { useState, useEffect } from "react";
import registerImg from "../../Assets/register.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
const Register = ({ onLogin, onShowPassword, onTogglePassword }) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");
  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passComplete, setPassComplete] = useState(false);
  const handleShowIndicator = () => {
    setShowIndicator(true);
  };
  const handlePasswordChange = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };
  useEffect(() => {
    //check for upper and lowercase

    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }
    if (pass.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }
    if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setPassChar(true);
    } else {
      setPassChar(false);
    }
    if (pass.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
    if (passLetter && passNumber && passChar && passLength) {
      setPassComplete(true);
    } else {
      setPassComplete(false);
    }
  }, [pass, passLetter, passNumber, passChar, passLength]);
  return (
    <div className="main-container --flex-center">
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
            Register
          </h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <input type="email" className="--width-100" placeholder="Email" />
          <div className="password">
            <input
              type={onShowPassword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
              onFocus={handleShowIndicator}
              value={pass}
              onChange={handlePasswordChange}
            />
            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <button
            onClick={() => alert(pass)}
            disabled={!passComplete}
            className={
              passComplete
                ? "--btn --btn-primary --btn-block"
                : "--btn --btn-primary --btn-block btn-disabled"
            }
          >
            Register
          </button>
          <span className="--text-sm --block">
            Have an account?{" "}
            <a href="##" style={{ color: "blue" }} onClick={onLogin}>
              Login
            </a>
          </span>
          {/* password strength indicator  */}
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm">Password Strength Indicator</p>
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLetter ? (
                    <FaCheck color="green" />
                  ) : (
                    <GoDotFill color="red" />
                  )}
                  &nbsp; Lowercase and Uppercase
                </span>
              </li>

              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passNumber ? (
                    <FaCheck color="green" />
                  ) : (
                    <GoDotFill color="red" />
                  )}
                  &nbsp; Numbers(0-9)
                </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passChar ? (
                    <FaCheck color="green" />
                  ) : (
                    <GoDotFill color="red" />
                  )}
                  &nbsp; Special Characters (!@#$%^&*)
                </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLength ? (
                    <FaCheck color="green" />
                  ) : (
                    <GoDotFill color="red" />
                  )}
                  &nbsp; Atleast 8 Character
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={registerImg} alt="Register" />
      </div>
    </div>
  );
};

export default Register;
