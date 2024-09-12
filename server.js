// server.js
const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like

// Middleware to parse incoming JSON data
app.use(express.json());

// Handle login requests
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate the username and password (you can replace this with your own logic)
    if (username === 'william' && password === 'gillies') {
        // Store the password securely (e.g., in a database)
        // For demonstration purposes, we'll just send a success response
        res.status(200).json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid username or password.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
