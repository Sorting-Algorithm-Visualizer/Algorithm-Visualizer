// this is our app

import React from 'react';
import './styles.css'

function App () {

  const hi:string = 'Hello'

  return (
   <div className='container'>
    <div className='header-container'>
      <header>AlgoVis</header>
    </div>
    <div className='form-container'>
        <form>
          <div className='input-group'>
            <input id='username' className='input-boxes' placeholder='Enter username'></input>
          </div>
          <div className='input-group'>
            <input id='password' className='input-boxes' placeholder='Enter password'></input>
          </div>
          <div className='button-group'>
            <button id='submit'>Login</button>
          </div>
        </form>
    </div>
   </div>
  )
};

export default App;
