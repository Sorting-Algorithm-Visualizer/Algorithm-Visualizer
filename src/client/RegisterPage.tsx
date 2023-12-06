import React from 'react';


const RegisterPage = () =>  {


    return (
      <div className='form-container'>
        <form action='/auth/register' method='POST'>
          <div className='input-group'>
            <input id='username' name='username' className='input-boxes' placeholder='Enter new username'></input>
          </div>
          <div className='input-group'>
            <input id='password' name='password' className='input-boxes' placeholder='Enter password'></input>
          </div>
          <div className='button-group'>
            <button id='submit'>Register</button>
          </div>
        </form>
      </div>
    );
  }

  export default RegisterPage