import React, { useState } from 'react';
import '../styles/Scorecard.css';

const Scorecard = () => {
  const [scoreStarted, setScoreStarted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [holeNumber, setHoleNumber] = useState(1);
  const [scores, setScores] = useState(Array(18).fill(''));
  const [discsUsed, setDiscsUsed] = useState(Array(18).fill(''));
  const [allLandingZones, setAllLandingZones] = useState(Array(18).fill([{ zone: '', askedPutt: false }]));
  const [allMadePutts, setAllMadePutts] = useState(Array(18).fill([]));
  const [askingPutt, setAskingPutt] = useState(false);

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

  const handleScoreChange = (event) => {
    const newScores = [...scores];
    newScores[holeNumber - 1] = event.target.value;
    setScores(newScores);
  };

  const handleDiscChange = (event) => {
    const newDiscsUsed = [...discsUsed];
    newDiscsUsed[holeNumber - 1] = event.target.value;
    setDiscsUsed(newDiscsUsed);
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
    newMadePutts[holeNumber - 1] = madePutt.slice(0, index + 1); // Reset madePutt state to match newLandingZones
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
      const nextZone = (allLandingZones[holeNumber - 1][index].zone === 'C1') ? 'C2' : 'C1';
      const newLandingZones = [...allLandingZones[holeNumber - 1], { zone: nextZone, askedPutt: false }];
      const updatedAllLandingZones = [...allLandingZones];
      updatedAllLandingZones[holeNumber - 1] = newLandingZones;
      setAllLandingZones(updatedAllLandingZones);
    } else {
      setAskingPutt(false);
    }
  };

  return (
    <div className="scorecard">
      <h1 className="scorecard-title">Scorecard</h1>

      {!scoreStarted && (
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

      {!scoreStarted ? (
        <button className="start-button" onClick={handleStartScore}>
          Begin Keeping Score
        </button>
      ) : (
        <div className="score-keeping">
          <p>
            <strong>
              {selectedCourse} Hole {holeNumber}
            </strong>
          </p>

          <div>
            <label>Score: </label>
            <input type="number" value={scores[holeNumber - 1]} onChange={handleScoreChange} />
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

          {allLandingZones[holeNumber - 1].map((landingZone, index) => (
            <div key={index}>
              <label>Where Did You Land: </label>
              <select
                value={landingZone.zone}
                onChange={(e) => handleLandingZoneChange(e, index)}
              >
                <option value="">Select Landing Zone</option>
                <option value="Fairway">Fairway</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>

              {landingZone.askedPutt && (
                <div>
                  <label>Did you make your putt? </label>
                  <select value={allMadePutts[holeNumber - 1][index] ? 'yes' : 'no'} onChange={(e) => handlePuttChange(e, index)}>
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => {
              if (holeNumber < 18) {
                setHoleNumber(holeNumber + 1);
                setAskingPutt(false);
              } else {
                alert('You finished the course!');
              }
            }}
          >
            Next Hole
          </button>

          <button
            onClick={() => {
              if (holeNumber > 1) {
                setHoleNumber(holeNumber - 1);
                setAskingPutt(false);
              }
            }}
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Scorecard;
