const express = require('express');
const Title = require('../models/Title');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const titles = await Title.find();
        res.json(titles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
