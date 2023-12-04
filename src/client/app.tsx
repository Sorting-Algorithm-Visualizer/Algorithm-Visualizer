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
    <div>
    <form>
      <input id='username' placeholder='Enter username'></input>
      <input id='password' placeholder='Enter password'></input>
    <button id='submit'>Login</button>
    </form>
    </div>
   </div>
  )
};

export default App;
