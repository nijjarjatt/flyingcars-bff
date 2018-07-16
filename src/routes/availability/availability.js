'use strict';

// Package imports
const express = require('express');
const joi = require('joi');
const AvailabilyService = require('../../services/availability.service');

// File globals
const router = express.Router();
const availabilyService = new AvailabilyService();
const requiredValidationOptionForJoi = "'{{key}}' is required";
const joiValidationOptions = {
	language: {
		any: {
			required: requiredValidationOptionForJoi,
		},
		string: {
			base: "'{{key}}' must be a string",
		},
	},
};
const carQuerySchema = joi.object().keys({
	id: joi.string().required(),
});

router.get('/availability', (req, res) => {
    const reqQuery = req.query;

    joi.validate(reqQuery, carQuerySchema, joiValidationOptions, (error) => {
		if (error) return res.status(400).send({
            statusCode: 400,
            message: 'Bad Input',
        });

        availabilyService.getAvailabilityForACar(reqQuery.id).then((carsData) => {
            res.send(carsData);
        }, (error) => {
            res.status(error.statusCode).send(error);
        });
	});
});

module.exports = router;
