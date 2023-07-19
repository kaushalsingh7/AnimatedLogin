import React from 'react'
import loginImg from "../../Assets/login.svg";


const Login = ({onRegister, OnReset}) => {
  return (
    <div className='main-container --flex-center' >
    <div className='img-container'>
<img src={loginImg}  alt='login' />
    </div>
      <div  className='form-container'>
    <form className='--form-control'>
  <h2 className='--color-danger'style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Login</h2>
  <input type="text"  className='--width-100' placeholder='Username'/>
  <input type="password"  className='--width-100'  placeholder='Password'/>
  <button className='--btn --btn-primary --btn-block '>
  Login</button>
  <a href='##' className='--text-sm' onClick={OnReset} >Forgot Password</a>
  <span className='--text-sm --block' >Don't have an account? <a href='##' style={{color:'blue'}}
  onClick={onRegister}>Register</a></span>
    </form>

      </div>
    </div>
  )

  }

// import loginImg from "../../Assets/login.svg";
export default Login
