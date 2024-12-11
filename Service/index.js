const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));


app.get('/api/scores', (req, res) => {
  res.json({ score: 100 });
});


const statsData = {
  player1: {
    dragonfly: { forehand: 5, backhand: 6, c1Putting: 10, girC1: 8, c2Putting: 12, girC2: 15 },
    hospital: { forehand: 4, backhand: 7, c1Putting: 12, girC1: 9, c2Putting: 11, girC2: 14 },
  },
  player2: {
    dragonfly: { forehand: 6, backhand: 5, c1Putting: 8, girC1: 7, c2Putting: 11, girC2: 13 },
    hospital: { forehand: 3, backhand: 6, c1Putting: 11, girC1: 10, c2Putting: 9, girC2: 12 },
  },
};

app.get('/api/stats', (req, res) => {
  const { player, course, statistic } = req.query;

  if (statsData[player] && statsData[player][course] && statsData[player][course][statistic] !== undefined) {
    res.json({ value: statsData[player][course][statistic] });
  } else {
    res.status(400).json({ error: 'Data not found' });
  }
});


const leaderboardData = {
  Dragonfly: [
    { name: 'Alice', score: 300, avatar: '/path/to/avatar1.jpg' },
    { name: 'Bob', score: 280, avatar: '/path/to/avatar2.jpg' },
    { name: 'Charlie', score: 270, avatar: '/path/to/avatar3.jpg' },
    { name: 'David', score: 260, avatar: '/path/to/avatar4.jpg' },
    { name: 'Eve', score: 250, avatar: '/path/to/avatar5.jpg' },
  ],
  Hospital: [
    { name: 'Zoe', score: 350, avatar: '/path/to/avatar1.jpg' },
    { name: 'Yuki', score: 340, avatar: '/path/to/avatar2.jpg' },
    { name: 'Xander', score: 330, avatar: '/path/to/avatar3.jpg' },
    { name: 'Will', score: 320, avatar: '/path/to/avatar4.jpg' },
    { name: 'Victor', score: 310, avatar: '/path/to/avatar5.jpg' },
  ],
};

app.get('/api/leaderboard', (req, res) => {
  const { course } = req.query;

  if (leaderboardData[course]) {
    res.json(leaderboardData[course]);
  } else {
    res.status(400).json({ error: 'Course not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
