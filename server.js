const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (if needed for CSS or JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file when the root is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Roll dice API
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// API endpoint to roll the dice
app.get('/roll', (req, res) => {
    const result = rollDice();
    res.json({ result: result });
});

// Start the server
app.listen(port, () => {
    console.log(`Dice roller API running at http://localhost:${port}`);
});
