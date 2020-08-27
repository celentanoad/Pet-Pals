const express = require('express');
const router = express.Router();


// GET api/auth
// Public route
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;