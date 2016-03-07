'use strict';

const express   = require('express');
const app       = express();
const path      = require('path');
const port      = process.env.port || 8030;

app.use(express.static(path.join(__dirname, 'view')));
app.listen(port, () => {
    console.log('server listening on ', port);
});
