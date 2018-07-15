'use strict';

// Package imports
const chai = require('chai');
const chaiHttp = require('chai-http');
const testUtils = require('../../utils');

// File globals
const should = chai.should();

chai.use(chaiHttp);

describe('GET /cars endpoint', () => {
    it('should throw 401 status code when security header("secret") is not present', () => {
        return testUtils.superTestRequestGenerator('/cars', {'secret': 'abc'}, 401);
    });

    it('should return 200 status code (with list of cars) when security header("secret") is present', () => {
        return testUtils.superTestRequestGenerator('/cars', {'secret': 'abc'}, 200)
            .then((response, error) => {
                response.body.should.be.instanceof(Array);
            });
    });
});
