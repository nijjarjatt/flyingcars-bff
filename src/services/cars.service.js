'use strict';

const carsData = require('./resources/cars.json');

class CarsService {
    getAllCars() {
        return new Promise((resolve) => {
            resolve(carsData);
        });
    }
}

module.exports = CarsService;

