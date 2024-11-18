import React, { useState } from 'react';
import '../styles/stats.css';

const Stats = () => {
    const [selectedPlayer, setSelectedPlayer] = useState('player1');
    const [selectedStat, setSelectedStat] = useState('backhand');

    // Handle player selection change
    const handlePlayerChange = (event) => {
        setSelectedPlayer(event.target.value);
    };

    // Handle stat selection change
    const handleStatChange = (event) => {
        setSelectedStat(event.target.value);
    };

    // Handle form submission for viewing stats
    const handleViewStats = () => {
        console.log(`Viewing ${selectedStat} for ${selectedPlayer}`);
        // You can replace this with logic to fetch and display stats from an API or data source
    };

    return (
        <div>
            <header>
                <h1>BYU Disc Golf</h1>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="leaderboard.html">Leaderboard</a></li>
                        <li><a href="stats.html">Stats</a></li>
                        <li><a href="scorecard.html">Keep-Score</a></li>
                        <li><a href="login.html">Login</a></li>
                    </ul>
                </nav>
            </header>

            <main className="index-main">
                <div className="scoring-options">
                    <label htmlFor="player-select">Select Player:</label>
                    <select id="player-select" name="players" value={selectedPlayer} onChange={handlePlayerChange}>
                        <option value="player1">Player 1</option>
                        <option value="player2">Player 2</option>
                        <option value="player3">Player 3</option>
                        <option value="player4">Player 4</option>
                        <option value="player5">Player 5</option>
                    </select>

                    <label htmlFor="stat-select">Select Stat:</label>
                    <select id="stat-select" name="stats" value={selectedStat} onChange={handleStatChange}>
                        <option value="backhand">Backhand</option>
                        <option value="forehand">Forehand</option>
                        <option value="c1">C1%</option>
                        <option value="c2">C2%</option>
                        <option value="c1x">C1x</option>
                        <option value="c2x">C2x</option>
                    </select>

                    <button onClick={handleViewStats}>View Stats</button>
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

export default Stats;
