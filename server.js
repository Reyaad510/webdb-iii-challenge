const express = require('express');
const helmet = require('helmet');

const cohortsRouter = require('./routes/cohorts.js');
const studentsRouter = require('./routes/students');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentsRouter);

module.exports = server;