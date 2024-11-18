// src/views/Leaderboard.jsx

import React from 'react';
import '../styles/leaderboard.css'; // Import the CSS file

const Leaderboard = () => {
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

      <main className="leaderboard-main">
        <div className="leaderboard">
          <h2>Best Avg Score</h2>
          <ol>
            <li>
              <span className="place">1st Place:</span>
              <span className="name">Player Name 1</span>
              <span className="score">Score: -10</span>
            </li>
            <li>
              <span className="place">2nd Place:</span>
              <span className="name">Player Name 2</span>
              <span className="score">Score: -8</span>
            </li>
            <li>
              <span className="place">3rd Place:</span>
              <span className="name">Player Name 3</span>
              <span className="score">Score: -6</span>
            </li>
          </ol>
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
}

export default Leaderboard;
