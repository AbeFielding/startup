import React, { useState } from 'react';
import '../styles/login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', username, password);
  };

  return (
    <div>
      <header>
        <h1>BYU Disc Golf</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="/stats">Stats</a></li>
            <li><a href="/scorecard">Keep-Score</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </main>

      <footer>
        <span>Created by Abe Field</span>
        <br />
        <a href="https://github.com/AbeFielding/startup">GitHub Repository</a>
        <img src="BYU_Disc_Golf_Team_logo.jpg" alt="BYU Disc Golf Team Logo" className="footer-logo" />
      </footer>
    </div>
  );
};

export default Login;
