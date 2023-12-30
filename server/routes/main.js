const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
    const locals = {
        title: "Nodejs Blog",
        description: "A blog created with NodeJs, Express and MongoDB"
    }   

    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    const locals = {
        title: "Nodejs blog about page",
        description: "Another descrip."
    }

    res.render('about', { locals });
});

module.exports = router;