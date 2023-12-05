// this is our app

import React from 'react';
import SortingVisualizer from './sortingVisualizer';
import './styles.css';

function App(): any {
  const hi: string = 'Hello';
  console.log(hi);

  return (
    <div className='container'>
      {/* <div className='header-container'>
      <header>AlgoVis</header>
    </div>
    <div className='form-container'>
        <form action='/auth/login' method='POST'>
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
    </div> */}
      <SortingVisualizer />
    </div>
  );
}

export default App;
