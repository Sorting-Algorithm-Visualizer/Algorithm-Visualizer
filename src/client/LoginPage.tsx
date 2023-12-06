import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        onLoginSuccess(); // User is authenticated
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('There was a problem with the login request:', error);
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            id='username'
            name='username'
            className='input-boxes'
            placeholder='Enter username'
          />
        </div>
        <div className='input-group'>
          <input
            id='password'
            name='password'
            className='input-boxes'
            placeholder='Enter password'
            type='password' // It's good practice to set the type to 'password' for password fields
          />
        </div>
        <div className='button-group'>
          <button type='submit' id='submit'>
            Login
          </button>
        </div>
      </form>
      <button onClick={handleRegisterClick}>Register New User</button>
    </div>
  );
};

export default LoginPage;
