'use strict';
process.env.API_SECRET = 'abc';

// Package imports
const chai = require('chai');
const dirtyChai = require('dirty-chai');
const chaiHttp = require('chai-http');
const testUtils = require('../../utils');

// File globals
const should = chai.should();

chai.use(chaiHttp);
chai.use(dirtyChai);

describe('GET /cars endpoint', () => {
    it('should return 200 status code (with list of cars) when security header("secret") is present', () => {
        return testUtils.superTestRequestGenerator('/cars', {'secret': 'abc'}, 200)
            .then((response) => {
                response.body.should.be.instanceof(Array);
            });
    });

    it('should return necessay fields for each car object in the 200 OK response', () => {
        return testUtils.superTestRequestGenerator('/cars', {'secret': 'abc'}, 200)
            .then((response) => {
                response.body[0].should.be.instanceof(Object);

                response.body[0].id.should.exist();
                response.body[0].name.should.exist();
                response.body[0].img.should.exist();
                response.body[0].make.should.exist();
                response.body[0].model.should.exist();
                response.body[0].year.should.exist();
            });
    });
});
