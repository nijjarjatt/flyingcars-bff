'use strict';

// Package imports
const express = require('express');

// File globals
const app = module.exports = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', require('./routes'));

app.listen(port, () => console.log('Listening on:', port));
