import React, { useState } from 'react';
import SortingVisualizer from './AlgoLogic';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';

function App(): any {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className='container'>
        <div className='header-container'>
          <header>AlgoVis</header>
        </div>
        <Routes>
          <Route
            path='/'
            element={
              isAuthenticated ? (
                <SortingVisualizer />
              ) : (
                <LoginPage onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
