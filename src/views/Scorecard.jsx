import React, { useState } from 'react';
import '../styles/scorecard.css';

// Function to fetch weather data based on course selection
async function fetchWeather(course) {
    let location;

    switch (course) {
        case 'hospital':
            location = 'Provo, Utah';
            break;
        case 'jolleys':
            location = 'Springville, Utah';
            break;
        case 'dragonfly':
            location = 'Lehi, Utah';
            break;
        case 'artdye':
            location = 'American Fork, Utah';
            break;
        default:
            location = 'Provo, Utah';
    }

    const apiKey = '3837f7f4bd1f4e4bb7e02213242809';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Update weather information on the page
        return {
            temp: data?.current?.temp_c || 'N/A',
            wind: data?.current?.wind_mph || 'N/A',
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return { temp: 'N/A', wind: 'N/A' };
    }
}

export default function Scorecard() {
    const [currentHole, setCurrentHole] = useState(1);
    const [weather, setWeather] = useState({ temp: 'N/A', wind: 'N/A' });
    const [isScoring, setIsScoring] = useState(false);
    const [startingHole, setStartingHole] = useState(1);

    // Function to update hole information
    const updateHoleDisplay = () => {
        const holeDistance = 300 + (currentHole - 1) * 20;
        const holePar = currentHole % 2 === 0 ? 4 : 3;
        return { holeDistance, holePar };
    };

    const handleCourseChange = (event) => {
        const selectedCourse = event.target.value;
        fetchWeather(selectedCourse).then(setWeather);
    };

    const handleStartScoreClick = () => {
        setIsScoring(true);
    };

    const handleBeginPlayClick = () => {
        setCurrentHole(startingHole);
    };

    const { holeDistance, holePar } = updateHoleDisplay();

    return (
        <div>
            <header>
                <h1>BYU Disc Golf</h1>
                <nav>
                    <menu>
                        <li><a href="/">Home</a></li>
                        <li><a href="/leaderboard">Leaderboard</a></li>
                        <li><a href="/stats">Stats</a></li>
                        <li><a href="/scorecard">Keep-Score</a></li>
                        <li><a href="/login">Login</a></li>
                    </menu>
                </nav>
            </header>

            <main className="scorecard-main">
                <div className="button-container">
                    <button className="score-btn" onClick={handleStartScoreClick}>
                        Begin Keeping Score
                    </button>
                </div>

                {isScoring && (
                    <section className="live-score" id="live-score">
                        <h2 className="current-round-scores">Current Round Scores</h2>
                        <div className="players-list scrollable">
                            {/* Repeat the player entries as necessary */}
                            {[...Array(10)].map((_, index) => (
                                <div className="player" key={index}>
                                    <span className="player-name">Player {index + 1}</span>
                                    <span className="player-holes">Holes Played: 18</span>
                                    <span className="player-score">Score: {index - 5}</span>
                                </div>
                            ))}
                        </div>

                        <div className="horizontal-bar"></div>

                        <div id="hole-info">
                            <div className="hole-nav">
                                <button onClick={() => setCurrentHole(currentHole - 1)} className="arrow-btn">&#9664;</button>
                                <h2 id="current-hole">Hole {currentHole}</h2>
                                <button onClick={() => setCurrentHole(currentHole + 1)} className="arrow-btn">&#9654;</button>
                            </div>
                            <p id="hole-distance">Distance: {holeDistance} ft</p>
                            <p id="hole-par">Par: {holePar}</p>
                        </div>

                        <div className="questions-container">
                            {/* Add questions as form elements here */}
                        </div>

                        <div className="scoring-options">
                            <label>Select Course:</label>
                            <select id="course-select" onChange={handleCourseChange}>
                                <option value="hospital">Hospital</option>
                                <option value="jolleys">Jolley's Ranch</option>
                                <option value="dragonfly">Dragonfly</option>
                                <option value="artdye">Art Dye</option>
                            </select>

                            <label>Starting Hole:</label>
                            <input
                                type="number"
                                value={startingHole}
                                onChange={(e) => setStartingHole(Number(e.target.value))}
                                min="1"
                                max="18"
                            />

                            <button className="score-btn" onClick={handleBeginPlayClick}>
                                Begin Play
                            </button>
                        </div>
                    </section>
                )}
            </main>

            <footer>
                <span>Created by Abe Field</span><br />
                <a href="https://github.com/AbeFielding/startup">GitHub Repository</a>
                <img src="BYU_Disc_Golf_Team_logo.jpg" alt="BYU Disc Golf Team Logo" className="footer-logo" />
            </footer>
        </div>
    );
}
