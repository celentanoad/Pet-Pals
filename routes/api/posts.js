const express = require('express');
const router = express.Router();


// GET api/posts
// Public route
router.get('/', (req, res) => res.send('Post route'));

module.exports = router;