'use strict';

class Authenticator {
    constructor(secret) {
        this.secret = secret;
        return this.validator();
    }

    validator() {
        const secret = this.secret;

        return (req, res, next) => {
            const headers = req.headers;

            if (headers.hasOwnProperty('secret') && headers['secret'] === secret) {
                next();
            } else {
                res.status(401).json({
                    'statusCode': 401,
                    'message': 'Not authorized',
                });
            }
        };
    }
}

module.exports = Authenticator;

