// this is our app

import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function App (): any {
  const hi: string = 'Hello';
  console.log(hi);

  return (
   <div className='container'>
    <div className='header-container'>
      <header>AlgoVis</header>
    </div>
    <div className='form-container'>
        <form action='/auth/login' method='POST'>
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
   </div>
  );
};

export default App;
