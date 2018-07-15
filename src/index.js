'use strict';

// Package imports
const express = require('express');

// File globals
const app = module.exports = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));
app.listen(port, () => console.log('Listening on:', port));
