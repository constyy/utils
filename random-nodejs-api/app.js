// Declaring
const express = require('express');
const data = require('./dume.json');
const port = 3000;

// Initialize
const app = express();

// Configure
app.use('/', (req, res) => {
    const header = data[Math.round(Math.random() * data.length)];
    return res.json({ header });
})

// Start
app.listen(port, () => console.log(`API started on port: ${port}`));