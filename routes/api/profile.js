const express = require('express');
const router = express.Router();
const auth = require('../../config/auth');
const profileCtrl = require('../../controllers/profiles');
const { check } = require('express-validator');

// Private routes
// GET api/profile/:id
router.get('/:id', auth, profileCtrl.getUserProfile);

// POST api/profile
// Create or update profile
router.post('/', [auth, [
    check('animal', 'Animal field is required!')
        .not()
        .isEmpty()
    ]], profileCtrl.createUserProfile);

module.exports = router;