import React, { useState, useEffect } from 'react';
import '../styles/leaderboard.css';
import madiTest from '../assets/images/avatars/madiTest.jpg';

const Leaderboard = () => {
  const courses = ['Dragonfly', 'Hospital', 'Art Dye', 'Forehand', 'Backhand', 'C1 Putting', 'C2 Putting', "Jolley's Ranch"];
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data for selected course
    fetch(`/api/leaderboard?course=${selectedCourse}`)
      .then((response) => response.json())
      .then((data) => {
        setLeaderboardData(data);
      })
      .catch((error) => {
        console.error('Error fetching leaderboard data:', error);
      });
  }, [selectedCourse]); // Re-fetch when selectedCourse changes

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <div className="dropdown-container">
        <label htmlFor="course-select">Select Stat:</label>
        <select
          id="course-select"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <div className="leaderboard-list">
        {leaderboardData.length > 0 ? (
          leaderboardData.map((player, index) => (
            <div key={index} className="leaderboard-item">
              <div className="avatar-container">
                <img
                  src={player.avatar || madiTest} // Fallback avatar if none
                  alt={player.name}
                  className="avatar-image"
                />
              </div>
              <div className="player-info">
                <span className="player-name">{player.name}</span>
                <span className="player-score">{player.score}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No leaderboard data available.</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
