"use strict";
let express = require('express'),
    app = express();

app.use('/static', express.static('assets'));

app.get('/', (req, res) => {
    res.send('hello there!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});