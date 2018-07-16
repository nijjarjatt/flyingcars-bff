'use strict';

// Package imports
const express = require('express');
const CarsService = require('../../services/cars.service');

// File globals
const router = express.Router();
const carsService = new CarsService();

router.get('/cars', (req, res) => {
    carsService.getAllCars().then((carsData) => {
        return res.json(carsData);
    }, (error) => {
        return res.status(error.statusCode).send(error);
    });
});

module.exports = router;
