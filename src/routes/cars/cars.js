'use strict';

// Package imports
const express = require('express');
const carsData = require('./cars.json');

// File globals
const router = express.Router();

router.get('/cars', (req, res) => {
    return res.json(carsData);
});

module.exports = router;
