const express = require('express');
const app = express();

// Set the port dynamically based on command line arguments, default to 4000
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Example endpoint for scores
app.get('/api/scores', (req, res) => {
  res.json({ score: 100 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});