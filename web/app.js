"use strict";
let express = require('express');
let app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send('hello there!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});