const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');


/**
 * GET
 * HOME
 */
router.get('', async (req, res) => {
    const locals = {
        title: "Nodejs Blog",
        description: "A blog created with NodeJs, Express and MongoDB"
    }

    try {
        const data = await Post.find();
        res.render('index', {url:req.protocol+"://"+req.headers.host, data});
    } catch (error) {
        console.log(error);
    }

    
});


// function insertPostData () {
//     Post.insertMany(
//         [
//             {
//                 title: "Building a Blog",
//                 author: "Davi Nascimento",
//                 body: "This is the body text"
//             },
//         ]
//     )
// }

// insertPostData();














router.get('/about', (req, res) => {
    const locals = {
        title: "Nodejs blog about page",
        description: "Another descrip."
    }

    res.render('about', {url:req.protocol+"://"+req.headers.host});
});

module.exports = router;