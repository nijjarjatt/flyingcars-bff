'use strict';

const server = require('../../src');
const superTest = require('supertest')(server);

module.exports = {
    superTestRequestGenerator: (endpoint, headers, statusCode) => {
        return superTest.get(endpoint)
            .set(headers)
            .expect(statusCode);
    },
};
