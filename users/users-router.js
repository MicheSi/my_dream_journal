const router = require('express').Router();

const Users = require('./users-model');
const Dreams = require('../dreams/dreams-model');

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

router.get('/:id/dreams', (req, res) => {
    Users.findUserDreams(req.params.id)
        .then(dreams => {
            res.status(200).json(dreams)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.post('/:id/dreams', (req, res) => {
    const dreamInfo = {...req.body, user_id: req.params.id}

    Dreams.add(dreamInfo)
        .then(dream => {
            res.status(201).json(dream)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.put('/:id', (req, res) => {
    Users.update(req.params.id, req.body)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router;