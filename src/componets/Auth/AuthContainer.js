import React,{useState} from 'react'
import "./AuthContainer.scss"
import Login from './Login';
import Register from './Register';
import Reset from './Reset';


const AuthContainer = () => {
  const[auth,setAuth]=useState({
    login:true,
    register:false,
    reset:false
  });
  // const[login,setLogin]=useState(true);
  // const[register,setRegister]=useState(false);
  // const[reset,setReset]=useState(false);
  const handleLogin=()=>{
    // setRegister(false);
    // setLogin(true);
    setAuth({ login:true,register:false,reset:false})
  }
  const handleRegister= ()=>{
// setLogin(false);
// setRegister(true);
setAuth({ login:false,register:true,reset:false})
  };
  const handleReset=()=>{
    // setLogin(false);
    // setReset(true);
    setAuth({ login:false,register:false,reset:true})
  }
 
  return (
    <section className='--flex-center --100vh'>
    <div className='container box'>
    {auth.login && <Login onRegister={handleRegister} OnReset={handleReset} />}
    {auth.register && <Register onLogin={handleLogin} />}
    {auth.reset && <Reset onLogin={handleLogin} />}
      
      
      
      </div>
    </section>
  )
}

export default AuthContainer;