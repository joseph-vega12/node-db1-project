const express = require("express");

// const db = require("../data/dbConfig.js"); // !!!!DO NOT NEED THIS HERE!!!!
const ActionsRouter = require('../api/accounts/account-router');

const server = express();

server.use(express.json());
server.use('/api/accounts', ActionsRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: '💩'});
});

module.exports = server;
