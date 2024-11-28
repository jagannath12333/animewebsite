// Import the Express module
const express = require('express');

// Initialize the Express app
const app = express();

// Define the port number
const PORT = 5000;

// Define the root route (GET /)
app.get('/', (req, res) => {
    res.send('Welcome to the Anime API! Go to /api/anime to see the data.');
});

// Define the /api/anime route
app.get('/api/anime', (req, res) => {
    res.json([
        { id: 1, name: "Naruto", genre: "Action" },
        { id: 2, name: "Attack on Titan", genre: "Action" }
    ]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
