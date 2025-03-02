const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Roll dice API
app.get('/roll', (req, res) => {
    const result = Math.floor(Math.random() * 6) + 1;
    res.json({ result: result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
