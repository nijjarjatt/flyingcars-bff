'use strict';

// Package imports
const express = require('express');
const Authentication = require('./services/auth.service');

// File globals
const app = module.exports = express();
const port = process.env.PORT || 3000;
const authentication = new Authentication(process.env.API_SECRET);

app.use(authentication);

app.use('/', require('./routes'));
app.listen(port, () => console.log('Listening on:', port));
