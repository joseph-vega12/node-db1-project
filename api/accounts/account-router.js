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
    try {
        const account = req.body;
        const data = await Accounts.create(account);
        res.json(data);
    } catch (err) {
        res.json(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Accounts.getById(id);
        res.json(data);
    } catch (err) {
        res.json(err.message);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const data = await Accounts.update(id, body);
        res.json(data);
    } catch (err) {
        res.json(err.message);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const data = await Accounts.delete(id);
        res.json(data);
    } catch (err) {
        res.json(err.message);
    }
})

module.exports = router;