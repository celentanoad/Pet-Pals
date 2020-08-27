const express = require('express');
const router = express.Router();


// GET api/profile
// Public route
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;