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

describe('GET /availability endpoint', () => {
    it('should throw 401 status code when security header("secret") is not present', () => {
        return testUtils.superTestRequestGenerator('/availability', {'some-other-secret': 'abc'}, 401)
            .then((response) => {
                response.statusCode.should.be.equal(401);
                response.body.message.should.be.equal('Not authorized');
            });
    });

    it('should return 400 status code when required query param "id" is not present', () => {
        return testUtils.superTestRequestGenerator('/availability', {'secret': 'abc'}, 400)
            .then((response) => {
                response.statusCode.should.be.equal(400);
                response.body.message.should.be.equal('Bad Input');
            });
    });

    it('should return necessay fields for each car object in the 200 OK response', () => {
        return testUtils.superTestRequestGenerator('/availability?id=1', {'secret': 'abc'}, 200)
            .then((response) => {
                response.body.should.be.instanceof(Object);

                response.body.id.should.exist();
                response.body.available.should.exist();
            });
    });
});
