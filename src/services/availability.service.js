'use strict';

class AvailabiltyService {
    constructor() {
        this.availabiltyData = require('./resources/availability.json');
    }

    getAvailabilityForACar(carId) {
        return new Promise((resolve, reject) => {
            const availabilityMatchFound = this.availabiltyData.find((availability) => {
                return availability.id === carId.toString();
            });

            if (!availabilityMatchFound) { return reject({statusCode: 404, message: 'Not Found'}); }

            resolve(availabilityMatchFound);
        });
    }
}

module.exports = AvailabiltyService;

