const router = require('express').Router();

const Users = require('./users-model');

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(user => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({message: err})
            }
        })
        .catch(err => {
            console.log(500).json({message: err})
        })
})

router.get('/:id/posts', (req, res) => {
    Users.findUserDreams(req.params.id)
        .then(dreams => {
            res.status(200).json(dreams)
        })
})

module.exports = router;