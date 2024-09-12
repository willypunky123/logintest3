// server.js
const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like
const accounts = require('./accounts.json'); // Load your accounts data

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the username and hashed password match (you'd use bcrypt here)
    const user = accounts.users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid username or password.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
