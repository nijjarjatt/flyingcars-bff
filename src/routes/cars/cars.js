'use strict';

// Package imports
const express = require('express');
const CarsService = require('../../services/cars.service');
const carsService = new CarsService();

// File globals
const router = express.Router();

router.get('/cars', (req, res) => {
    carsService.getAllCars().then((carsData) => {
        return res.json(carsData);
    }, (error) => {
        return res.status(error.statusCode).send(error);
    });
});

module.exports = router;
