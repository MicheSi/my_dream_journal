const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const dreamsRouter = require('../dreams/dreams-router');
const restricted = require('../auth/restricted-middleware');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('api/dreams', restricted, dreamsRouter);

server.get('/', (req, res) => {
    res.send('Server is running!');
});

module.exports = server;