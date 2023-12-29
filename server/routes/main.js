const express = require('express');

const router = express.Router();

// Routes
router.get('', (req, res) => {
    res.send("Hello, World!");
});

router.get('/a', (req, res) => {
    res.send("Hello, Baby!");
});

module.exports = router;