'use strict';

// Package imports
const express = require('express');

// File globals
const app = module.exports = express();

// All routes are registered here
app.use('/', require('./cars/cars'));

// Wildcard route
app.all('*', (req, res) => {
	res.status(404).json({
		statusCode: 404,
		message: 'Not Found',
	});
});

