'use strict';

const carsData = require('../routes/cars/cars.json');

class CarsService {
    getAllCars() {
        return new Promise((resolve) => {
            resolve(carsData);
        });
    }
}

module.exports = CarsService;

