import React from 'react';
// import SortingVisualizer from './AlgoLogic';
import './styles.css';

function App (): any {
  return (
    <div className='container'>
      <div className='header-container'>
      <header>AlgoVis</header>
    </div>
    <div className='form-container'>
        <form action='/auth/signup' method='POST'>
          <div className='input-group'>
            <input id='username' className='input-boxes' name='username' placeholder='Enter username'></input>
          </div>
          <div className='input-group'>
            <input id='password' className='input-boxes' name='password' placeholder='Enter password'></input>
          </div>
          <div className='button-group'>
            <button id='submit'>Login</button>
          </div>
        </form>
    </div>
      {/* <SortingVisualizer /> */}
    </div>
  );
}

export default App;
