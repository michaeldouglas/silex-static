"use strict";
let express = require('express'),
    app = express();

app.use('/static', express.static('assets'));
app.use('/modules', express.static('node_modules'));

app.get('/', (req, res) => {
    res.send('hello there!');
});

const PORT = ( typeof process.env.PORT == 'undefined' ? '3000' : process.env.PORT );

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});