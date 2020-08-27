const express = require('express');
const router = express.Router();


// GET api/users
// Public route
router.get('/', (req, res) => res.send('User route'));

module.exports = router;