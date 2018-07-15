'use strict';

// Package imports
const express = require('express');

// File globals
const router = express.Router();

router.get('/cars', (req, res) => {
    return res.send('success');
});

module.exports = router;
