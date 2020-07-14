const jwt = require('jsonwebtoken');

const {jwtSecret} = require('../config/secrets');

module.exports = (req, res, next) => {
    const {authorization} = req.headers;

    if (authorization) {
        jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({message: 'User not authorized'});
            } else {
                req.decodedToken = decodedToken;
                next()
            }
        })
    } else {
        res.status(400).json({message: 'Please log in to continue'});
    }
}