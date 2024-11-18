import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './views/Index.jsx';
import Leaderboard from './views/Leaderboard.jsx';
import Login from './views/Login.jsx';
import Scorecard from './views/Scorecard.jsx';
import Stats from './views/Stats.jsx';
import Sidebar from './components/sidebar.jsx';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/scorecard" element={<Scorecard />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
