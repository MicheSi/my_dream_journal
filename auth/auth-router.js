const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const {jwtSecret} = require('../config/secrets');

router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(err => {
            res.status(500).json({message: err});
        })
})

router.post('/signin', (req, res) => {
    const {username, password} = req.body;

    Users.findBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    id: user.id,
                    token
                })
            } else {
                res.status(401).json({message: 'User not authorized'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

function generateToken(user) {
    const payload = {
        username: user.username,
        id: user.id
    }

    const options = {
        expiresIn: '7d'
    }

    return jwt.sign(payload, jwtSecret, options)
}


module.exports = router;