const express = require('express');
const router = express.Router();
const auth = require('../../config/auth');
const profileCtrl = require('../../controllers/profiles');
const { check } = require('express-validator');

/*  ----- Private Routes ----- */

// GET api/profiles/myprofile
// Get current user's profile
router.get('/myprofile', auth, profileCtrl.getCurrentUserProfile);

// POST api/profiles
// Create or update profile
router.post('/', [auth, [
    check('animal', 'Animal field is required!')
        .not()
        .isEmpty()
    ]], profileCtrl.createUserProfile);

// DELETE api/profiles/myprofile
// Delete current user's profile
router.delete('/myprofile', auth, profileCtrl.deleteProfile);

// POST api/profiles/friends
// Add friend
router.post('/friends/:id', auth, profileCtrl.addFriend);

// DELETE api/profiles/friends/:id
// Remove friend
router.delete('/friends/:id', auth, profileCtrl.removeFriend);

// GET api/profiles/friends
// Get all friends
router.get('/friends', auth, profileCtrl.getAllFriends);

/* ----- Public Routes ----- */
// GET api/profiles
// Get all profiles
router.get('/', profileCtrl.getAll);

// GET api/profiles/:id
// Get profile by user ID
router.get('/:id', profileCtrl.getUserProfile);


module.exports = router;