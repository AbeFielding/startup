import React, { useState, useEffect } from 'react';
import '../styles/stats.css';

const Stats = () => {
  const [player, setPlayer] = useState('');
  const [course, setCourse] = useState('');
  const [statistic, setStatistic] = useState('');
  const [statData, setStatData] = useState(null);

  // Handle the fetch request when the user selects options
  const handleFetchStats = async () => {
    if (player && course && statistic) {
      try {
        const response = await fetch(`/api/stats?player=${player}&course=${course}&statistic=${statistic}`);
        if (response.ok) {
          const data = await response.json();
          setStatData(data);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };

  useEffect(() => {
    handleFetchStats(); // Automatically fetch stats if all values are selected
  }, [player, course, statistic]);

  return (
    <div className="stats-container">
      <h1>Stats</h1>
      <p>Select options to view statistics:</p>

      <div className="dropdown-section">
        <select className="course-dropdown" value={player} onChange={(e) => setPlayer(e.target.value)}>
          <option value="" disabled>Select Player</option>
          <option value="player1">Player 1</option>
          <option value="player2">Player 2</option>
          <option value="player3">Player 3</option>
        </select>

        <select className="course-dropdown" value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="" disabled>Select Course</option>
          <option value="dragonfly">Dragonfly</option>
          <option value="hospital">Hospital</option>
          <option value="artDye">Art Dye</option>
          <option value="jolleysRanch">Jolley's Ranch</option>
        </select>

        <select className="course-dropdown" value={statistic} onChange={(e) => setStatistic(e.target.value)}>
          <option value="" disabled>Select Statistic</option>
          <option value="forehand">Forehand</option>
          <option value="backhand">Backhand</option>
          <option value="c1Putting">C1 Putting</option>
          <option value="girC1">GIR C1</option>
          <option value="c2Putting">C2 Putting</option>
          <option value="girC2">GIR C2</option>
        </select>
      </div>

      {statData && (
        <div className="stat-display">
          <h3>{statistic} Stats for {player} on {course}</h3>
          <p>{statData.value}</p> {/* You can adjust this based on the data structure */}
        </div>
      )}
    </div>
  );
};

export default Stats;
