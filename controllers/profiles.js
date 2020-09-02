const Profile = require('../models/Profile');
const User = require('../models/User');
const { validationResult } = require('express-validator');

module.exports = {
    getUserProfile,
    createUserProfile
}

async function getUserProfile(req, res) {
    try {
       const profile = await Profile.findById(req.user.id).populate('user', ['name']);
       if (!profile) return res.status(400).json({ msg: 'Profile not found' })
        res.json(profile)
    } catch(err) {
        console.error(err);
        res.status(500);
    }
}

async function createUserProfile(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const {
        avatar,
        animal,
        breed,
        bio
    } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id
    if (avatar) profileFields.avatar = avatar;
    if (animal) profileFields.animal = animal;
    if (breed) profileFields.breed = breed;
    if (bio) profileFields.bio = bio;

    try {
        let profile = await Profile.findOne({ user: req.user.id });
        console.log(req.user.id)
        console.log(profile);
        if (profile) {
            profile = await Profile.findOneAndUpdate(
                    {user: req.user.id}, 
                    { $set: profileFields }, 
                    { new: true });
            console.log(profile)
            return res.json(profile);
        }
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}