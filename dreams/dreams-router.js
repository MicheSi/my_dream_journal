const router = require('express').Router();

const Dreams = require('./dreams-model');

router.get('/', (req, res) => {
    Dreams.find(req.decodedToken.user_id)
        .then(dream => {
            res.status(200).json(dream)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Dreams.findById(id)
        .then(dream => {
            if (dream) {
                res.status(200).json(dream)
            } else {
                res.status(404).json({message: 'Could not find a dream with that id'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.get('/users/:id', (req, res) => {
    const id = req.params.id
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const dreamResults = {}

    Dreams.findByUser(id)
        .then(dream => {

            if (endIndex < dream.length) {
                dreamResults.next = {
                    page: page + 1,
                    limit: limit
                }
            }
        
            if (startIndex > 0) {
                dreamResults.prev = {
                    page: page - 1,
                    limit: limit
                }
            }

            if (dream) {
                dreamResults.dreamResults = dream.slice(startIndex, endIndex)
                res.status(200).json(dreamResults)
            } else {
                res.status(404).json({message: 'Could not find dreams for that user'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.post('/', (req, res) => {
    const dreamInfo = req.body;

    Dreams.add(dreamInfo)
        .then(dream => {
            res.status(201).json(dream)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Dreams.findById(id)
        .then(dream => {
            if (dream) {
                Dreams.update(changes, id)
                    .then(updatedDream => {
                        res.status(201).json(updatedDream)
                    })
            } else {
                res.status(404).json({message: 'Unable to update dream data'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Dreams.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({removed: deleted})
            } else {
                res.status(404).json({message: 'Could not delete dream with that id'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router;