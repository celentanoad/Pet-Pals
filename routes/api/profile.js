const express = require('express');
const router = express.Router();
const auth = require('../../config/auth');
const profileCtrl = require('../../controllers/profiles');
const { check } = require('express-validator');

/*  ----- Private Routes ----- */

// GET api/profile/myprofile
// Get current user's profile
router.get('/myprofile', auth, profileCtrl.getCurrentUserProfile);

// POST api/profile
// Create or update profile
router.post('/', [auth, [
    check('animal', 'Animal field is required!')
        .not()
        .isEmpty()
    ]], profileCtrl.createUserProfile);

// DELETE api/profile/myprofile
// Delete current user's profile
router.delete('/myprofile', auth, profileCtrl.deleteProfile);

// POST api/profile/friends
// Add friend
router.post('/friends', auth, profileCtrl.addFriend);

// DELETE api/profile/friends/:id
// Remove friend
router.delete('/friends/:id', auth, profileCtrl.removeFriend);

// GET api/profile/friends
// Get all friends
router.get('/friends', auth, profileCtrl.getAllFriends);

/* ----- Public Routes ----- */
// GET api/profile
// Get all profiles
router.get('/', profileCtrl.getAll);

// GET api/profile/:id
// Get profile by user ID
router.get('/:id', profileCtrl.getUserProfile);


module.exports = router;