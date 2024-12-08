import React from 'react';
import '../styles/stats.css';

const Stats = () => {
  return (
    <div className="stats-container">
      <h1>Stats</h1>
      <p>Select options to view statistics:</p>
      
      <div className="dropdown-section">
        <select className="course-dropdown">
          <option value="" disabled selected>
            Select Player
          </option>
          <option value="player1">Player 1</option>
          <option value="player2">Player 2</option>
          <option value="player3">Player 3</option>
        </select>

        <select className="course-dropdown">
          <option value="" disabled selected>
            Select Course
          </option>
          <option value="dragonfly">Dragonfly</option>
          <option value="hospital">Hospital</option>
          <option value="artDye">Art Dye</option>
          <option value="jolleysRanch">Jolley's Ranch</option>
        </select>

        <select className="course-dropdown">
          <option value="" disabled selected>
            Select Statistic
          </option>
          <option value="forehand">Forehand</option>
          <option value="backhand">Backhand</option>
          <option value="c1Putting">C1 Putting</option>
          <option value="girC1">GIR C1</option>
          <option value="c2Putting">C2 Putting</option>
          <option value="girC2">GIR C2</option>
        </select>
      </div>
    </div>
  );
};

export default Stats;
