import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Leaderboard from './views/Leaderboard';
import Scorecard from './views/Scorecard';
import Stats from './views/Stats';
import Index from './views/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/scorecard" element={<Scorecard />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
