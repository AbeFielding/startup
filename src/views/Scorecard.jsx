import React, { useState } from 'react';
import '../styles/Scorecard.css';
import chevronUpIcon from '../assets/icons/chevron-arrow-up.png';
import chevronDownIcon from '../assets/icons/chevron-arrow-down.png';

const Scorecard = () => {
  const [scoreStarted, setScoreStarted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [holeNumber, setHoleNumber] = useState(1);
  const [scores, setScores] = useState(Array(18).fill(0));
  const [discsUsed, setDiscsUsed] = useState(Array(18).fill(''));
  const [throwStyles, setThrowStyles] = useState(Array(18).fill(''));
  const [allLandingZones, setAllLandingZones] = useState(Array(18).fill([{ zone: '', askedPutt: false }]));
  const [allMadePutts, setAllMadePutts] = useState(Array(18).fill([]));
  const [askingPutt, setAskingPutt] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleStartScore = () => {
    if (selectedCourse) {
      setScoreStarted(true);
    } else {
      alert('Please select a course first!');
    }
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleScoreIncrement = () => {
    const newScores = [...scores];
    newScores[holeNumber - 1] += 1;
    setScores(newScores);
  };

  const handleScoreDecrement = () => {
    const newScores = [...scores];
    newScores[holeNumber - 1] -= 1;
    setScores(newScores);
  };

  const handleDiscChange = (event) => {
    const newDiscsUsed = [...discsUsed];
    newDiscsUsed[holeNumber - 1] = event.target.value;
    setDiscsUsed(newDiscsUsed);
  };

  const handleThrowStyleChange = (event) => {
    const newThrowStyles = [...throwStyles];
    newThrowStyles[holeNumber - 1] = event.target.value;
    setThrowStyles(newThrowStyles);
  };

  const handleLandingZoneChange = (event, index) => {
    const newLandingZones = [...allLandingZones[holeNumber - 1]].slice(0, index + 1);
    newLandingZones[index].zone = event.target.value;
    if (event.target.value === 'C1' || event.target.value === 'C2') {
      setAskingPutt(true);
      newLandingZones[index].askedPutt = true;
    } else if (event.target.value === 'Fairway') {
      if (index === newLandingZones.length - 1) {
        newLandingZones.push({ zone: '', askedPutt: false });
      }
      setAskingPutt(false);
    }
    const updatedAllLandingZones = [...allLandingZones];
    updatedAllLandingZones[holeNumber - 1] = newLandingZones;
    setAllLandingZones(updatedAllLandingZones);
    const newMadePutts = [...allMadePutts];
    newMadePutts[holeNumber - 1] = newMadePutts.slice(0, index + 1); 
    setAllMadePutts(newMadePutts);
  };

  const handlePuttChange = (event, index) => {
    const newMadePutts = [...allMadePutts[holeNumber - 1]];
    newMadePutts[index] = event.target.value === 'yes';
    const updatedAllMadePutts = [...allMadePutts];
    updatedAllMadePutts[holeNumber - 1] = newMadePutts;
    setAllMadePutts(updatedAllMadePutts);
    if (event.target.value === 'no') {
      setAskingPutt(true);
      const nextZone = allLandingZones[holeNumber - 1][index].zone === 'C1' ? 'C2' : 'C1';
      const newLandingZones = [...allLandingZones[holeNumber - 1], { zone: nextZone, askedPutt: false }];
      const updatedAllLandingZones = [...allLandingZones];
      updatedAllLandingZones[holeNumber - 1] = newLandingZones;
      setAllLandingZones(updatedAllLandingZones);
    } else {
      setAskingPutt(false);
    }
  };

  const handleConfirmScores = () => {
    setShowSummary(true);
  };

  const handleSubmitScores = async () => {
    // Prepare the score data to be sent to the backend
    const scoreData = {
      selectedCourse,
      scores,
      discsUsed,
      throwStyles,
      allLandingZones,
      allMadePutts
    };

    try {
      const response = await fetch('http://localhost:5000/api/scorecard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(scoreData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit scorecard');
      }

      const data = await response.json();
      console.log('Scorecard submitted successfully:', data);

      // Clear state after successful submission
      setShowSummary(false);
      setScoreStarted(false);
      setHoleNumber(1);
      setScores(Array(18).fill(0));
      setDiscsUsed(Array(18).fill(''));
      setThrowStyles(Array(18).fill(''));
      setAllLandingZones(Array(18).fill([{ zone: '', askedPutt: false }]));
      setAllMadePutts(Array(18).fill([]));
    } catch (error) {
      console.error('Error submitting scorecard:', error);
      alert('Failed to submit scorecard. Please try again.');
    }
  };

  return (
    <div className="scorecard">
      <h1 className="scorecard-title">Scorecard</h1>
      {!scoreStarted && !showSummary && (
        <div className="course-selector">
          <select
            id="course"
            value={selectedCourse}
            onChange={handleCourseChange}
            className="course-dropdown"
          >
            <option value="">--Select a Course--</option>
            <option value="Dragonfly">Dragonfly</option>
            <option value="Hospital">Hospital</option>
            <option value="Art Dye">Art Dye</option>
            <option value="Jolley's Ranch">Jolley's Ranch</option>
          </select>
        </div>
      )}
      {!scoreStarted && !showSummary && (
        <button className="start-button" onClick={handleStartScore}>
          Begin Keeping Score
        </button>
      )}
      {scoreStarted && !showSummary && (
        <div className="score-keeping">
          <p>
            <strong>{selectedCourse} Hole {holeNumber}</strong>
          </p>
          <div className="score-input">
            <button onClick={handleScoreDecrement} className="score-button small-btn">
              <img src={chevronDownIcon} alt="Decrease Score" />
            </button>
            <span className="score-display">{scores[holeNumber - 1]}</span>
            <button onClick={handleScoreIncrement} className="score-button small-btn">
              <img src={chevronUpIcon} alt="Increase Score" />
            </button>
          </div>
          <div>
            <label>Disc Used: </label>
            <select value={discsUsed[holeNumber - 1]} onChange={handleDiscChange}>
              <option value="">Select Disc</option>
              <option value="Putter">Putter</option>
              <option value="Midrange">Midrange</option>
              <option value="Fairway Driver">Fairway Driver</option>
              <option value="Distance Driver">Distance Driver</option>
            </select>
          </div>
          <div>
            <label>How Did You Throw? </label>
            <select value={throwStyles[holeNumber - 1]} onChange={handleThrowStyleChange}>
              <option value="">Select Style</option>
              <option value="Backhand">Backhand</option>
              <option value="Forehand">Forehand</option>
              <option value="Overhand">Overhand</option>
            </select>
          </div>
          {allLandingZones[holeNumber - 1].map((landingZone, index) => (
            <div key={index}>
              <label>Landing Zone {index + 1}: </label>
              <select
                value={landingZone.zone}
                onChange={(e) => handleLandingZoneChange(e, index)}
              >
                <option value="">Select Zone</option>
                <option value="Fairway">Fairway</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>
              {landingZone.askedPutt && (
                <div>
                  <label>Made Putt?</label>
                  <select
                    onChange={(e) => handlePuttChange(e, index)}
                    value={allMadePutts[holeNumber - 1][index] ? 'yes' : 'no'}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              )}
            </div>
          ))}
          <div className="buttons">
            <button onClick={() => setHoleNumber(holeNumber - 1)} disabled={holeNumber === 1}>
              Previous Hole
            </button>
            <button onClick={() => setHoleNumber(holeNumber + 1)} disabled={holeNumber === 18}>
              Next Hole
            </button>
          </div>
          <button className="confirm-scores" onClick={handleConfirmScores}>
            Submit Scores
          </button>
        </div>
      )}
      {showSummary && (
        <div className="summary">
          <h2>Summary</h2>
          <button onClick={handleSubmitScores}>Confirm and Submit</button>
        </div>
      )}
    </div>
  );
};

export default Scorecard;
