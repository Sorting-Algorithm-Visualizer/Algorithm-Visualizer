import React from 'react';
import SortingVisualizer from './AlgoLogic';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


function App(): any {
  const hi: string = 'Hello';
  console.log(hi);

  return (
    <Router>
      <div className='container'>
        <div className='header-container'>
          <header>AlgoVis</header>
        </div>
        <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
