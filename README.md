# BYU DG Stats

## Elevator pitch

Disc Golf is a small sport, and an even smaller collegiate sport. As such the BYU disc golf team has no where to keep track of stats. When they play courses for practice not all the data gets saved, and it is difficult for them to make sure their best players are being put in tournaments. The BYU DG Stats application will allow the team members to pick their course, enter their scores per hole, and get live leaderboard updates as they practice. This will also allow them to see their averages for each hole and for each course. Greatly aiding in their ability to see their progress.

## Design
Users will input scores
![Score Diagram](./Images/Mainscreen.png)

Users can see leaderboard
![Leader Diagram](./Images/Leaderboard.png)

Sequence Diagram on how users interact with webpage
![Score Diagram](./Images/Sequence.png)

## Key Features

- **Secure Login**: Users can securely log in over HTTPS, ensuring their credentials are protected.
- **Course Selection**: Users can choose from a list of available courses to track their practice sessions.
- **Score Input**: Players can enter their scores for each hole in real-time.
- **Live Leaderboard**: The leaderboard updates in real-time to reflect current scores and rankings.
- **Average Calculation**: Users can view their average scores for each hole and each course.
- **Persistent Data Storage**: All scores and user data are stored persistently in the database.
- **Real-Time Updates**: Web sockets provide real-time updates for score changes and leaderboard adjustments.
- **User Profile Management**: Players can manage their profiles and view their performance history.
- **Admin Functions**: Administrators can add or remove courses, and manage user accounts.