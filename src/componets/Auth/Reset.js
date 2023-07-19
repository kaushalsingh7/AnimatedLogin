import React from 'react'
import forgotImg from "../../Assets/forgot.svg"
import {AiOutlineCloseCircle} from 'react-icons/ai';
const Reset = ({onLogin}) => {
  return (
    
    <div className='main-container --flex-center' >
    
    
          <div  className='form-container reset '>
    <form className='--form-control'>
  <h2 className='--color-danger'style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Reset</h2>
  <h2 className='--color-danger'style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Password</h2>
    <input type="email"  className='--width-100' placeholder='Email'/>
    <button className='--btn --btn-primary --btn-block '>
  Reset Password</button>
  <span className='--text-sm --block --text-center' >We will send you a reset link!!</span>
  <div className='close'><AiOutlineCloseCircle style={{color:'red'}} size={25} onClick={onLogin} /></div>   
    </form>

      </div>
      <div className='img-container'>
<img src={forgotImg}  alt='reset' />
    </div>
    </div>
  )
}

export default Reset
