const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 3000;


function rollDice() { return Math.floor(Math.random() * 6) + 1;}


app.get('/roll', (req, res) => {
    const result = rollDice();
    res.json({ result: result });
});


app.listen(port, () => {
    console.log(`Dice roller API running at http://localhost:${port}`);
});
