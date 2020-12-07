const express = require('express');
const router = express.Router();
const Accounts = require('./account.model');

router.get('/', async (req, res) => {
    try {
        const data = await Accounts.getAll();
        res.json(data);
    } catch (err) {
        res.json(err.message);
    }
});

router.post('/', async (req, res) => {

});

module.exports = router;