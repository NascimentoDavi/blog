const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');


/**
 * GET
 * HOME
 */
router.get('', async (req, res) => {
    try {
      const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
      }
  
      let perPage = 10;
      let page = req.query.page || 1;
  
      const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();
  
      // Count is deprecated - please use countDocuments
      // const count = await Post.count();
      const count = await Post.countDocuments({});
      const nextPage = parseInt(page) + 1;
      const hasNextPage = nextPage <= Math.ceil(count / perPage);
  
      res.render('index', { 
        locals,
        data,
        current: page,
        nextPage: hasNextPage ? nextPage : null,
        currentRoute: '/'
      });
  
    } catch (error) {
      console.log(error);
    }
  
  });

function insertPostData () {
    Post.insertMany(
        [
            {
                title: "Building a Blog",
                author: "Davi Nascimento",
                body: "This is the body text"
            },
        ]
    )
}

insertPostData();

router.get('/about', (req, res) => {
    const locals = {
        title: "Nodejs blog about page",
        description: "Another descrip."
    }

    res.render('about', {locals});
});

module.exports = router;