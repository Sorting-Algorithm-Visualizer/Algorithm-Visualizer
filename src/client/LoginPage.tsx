import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();
    const handleRegisterClick = () => {
      navigate('/register')
    }
    
  return (
     
        <div className='form-container'>
          <form action='/login' method='POST'>
            <div className='input-group'>
              <input id='username' name='username' className='input-boxes' placeholder='Enter username'></input>
            </div>
            <div className='input-group'>
              <input id='password' name='password' className='input-boxes' placeholder='Enter password'></input>
            </div>
            <div className='button-group'>
              <button id='submit'>Login</button>
              
            </div>
          </form>
          <button onClick={handleRegisterClick}>Register New User</button>
        </div>
      );
    
  } 


export default LoginPage