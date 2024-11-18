// src/views/Index.jsx
import React from 'react';
import '../assets/index.css';  // Link the CSS file

const Index = () => {
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

      <main className="index-main">
        {/* Additional content or images can go here */}
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

export default Index;
