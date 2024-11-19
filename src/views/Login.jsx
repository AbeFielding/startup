import React from 'react';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <p className="login-description">Welcome back! Please log in to continue.</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-links">
          <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
          <a href="/sign-up" className="sign-up-link">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
