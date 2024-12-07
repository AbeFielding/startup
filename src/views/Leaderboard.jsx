import React, { useState } from 'react';
import '../styles/leaderboard.css';
import madiTest from '../assets/images/avatars/madiTest.jpg';

const Leaderboard = () => {
  const courses = ['Dragonfly', 'Hospital', 'Art Dye', 'Forehand', 'Backhand', 'C1 Putting', 'C2 Putting', "Jolley's Ranch"];
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const leaderboardData = {
    Dragonfly: [
      { name: 'Alice', score: 300, avatar: madiTest },
      { name: 'Bob', score: 280, avatar: madiTest },
      { name: 'Charlie', score: 270, avatar: madiTest },
      { name: 'David', score: 260, avatar: madiTest },
      { name: 'Eve', score: 250, avatar: madiTest },
    ],
    Forehand: [
      { name: 'Zoe', score: 350, avatar: madiTest },
      { name: 'Yuki', score: 340, avatar: madiTest },
      { name: 'Xander', score: 330, avatar: madiTest },
      { name: 'Will', score: 320, avatar: madiTest },
      { name: 'Victor', score: 310, avatar: madiTest },
    ],
    Backhand: [
      { name: 'Zoe', score: 350, avatar: madiTest },
      { name: 'Yuki', score: 340, avatar: madiTest },
      { name: 'Xander', score: 330, avatar: madiTest },
      { name: 'Will', score: 320, avatar: madiTest },
      { name: 'Victor', score: 310, avatar: madiTest },
    ],
    'C1 Putting': [
      { name: 'Zoe', score: 350, avatar: madiTest },
      { name: 'Yuki', score: 340, avatar: madiTest },
      { name: 'Xander', score: 330, avatar: madiTest },
      { name: 'Will', score: 320, avatar: madiTest },
      { name: 'Victor', score: 310, avatar: madiTest },
    ],
    'C2 Putting': [
      { name: 'Zoe', score: 350, avatar: madiTest },
      { name: 'Yuki', score: 340, avatar: madiTest },
      { name: 'Xander', score: 330, avatar: madiTest },
      { name: 'Will', score: 320, avatar: madiTest },
      { name: 'Victor', score: 310, avatar: madiTest },
    ],
    Hospital: [
      { name: 'Zoe', score: 350, avatar: madiTest },
      { name: 'Yuki', score: 340, avatar: madiTest },
      { name: 'Xander', score: 330, avatar: madiTest },
      { name: 'Will', score: 320, avatar: madiTest },
      { name: 'Victor', score: 310, avatar: madiTest },
    ],

    'Art Dye': [
      { name: 'Liam', score: 370, avatar: madiTest },
      { name: 'Emma', score: 360, avatar: madiTest },
      { name: 'Noah', score: 355, avatar: madiTest },
      { name: 'Olivia', score: 350, avatar: madiTest },
      { name: 'Sophia', score: 340, avatar: madiTest },
    ],
    "Jolley's Ranch": [
      { name: 'Mia', score: 400, avatar: madiTest },
      { name: 'Lucas', score: 390, avatar: madiTest },
      { name: 'Ethan', score: 380, avatar: madiTest },
      { name: 'Isabella', score: 375, avatar: madiTest },
      { name: 'James', score: 370, avatar: madiTest },
    ],
  };

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
        {leaderboardData[selectedCourse].map((player, index) => (
          <div key={index} className="leaderboard-item">
            <div className="avatar-container">
              <img
                src={player.avatar}
                alt={player.name}
                className="avatar-image"
              />
            </div>
            <div className="player-info">
              <span className="player-name">{player.name}</span>
              <span className="player-score">{player.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
