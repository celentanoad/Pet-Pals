const User = require('../models/User');
const Profile = require('../models/Profile');
const { validationResult } = require('express-validator');

module.exports = {
    getCurrentUserProfile,
    createUserProfile,
    getAll,
    getUserProfile,
    deleteProfile,
    addFriend,
    removeFriend,
    getAllFriends
}

async function getCurrentUserProfile(req, res) {
    try {
       const profile = await Profile.findOne({user: req.user.id}).populate('user');
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
        if (profile) {
            profile = await Profile.findOneAndUpdate(
                    {user: req.user.id}, 
                    { $set: profileFields }, 
                    { new: true });
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

async function getAll(req, res) {
    try {
        let profiles = await Profile.find().populate('user');
        res.json(profiles);
    } catch(err) {
        console.error(err);
        res.satus(500).send('Server Error');
    }
}

async function getUserProfile(req, res) {
    try {
        let profile = await Profile.findOne({ user: req.params.id }).populate('user');
        if (!profile) return res.status(400).json({ msg: 'No Profile Found' });
        res.json(profile);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

async function deleteProfile(req, res) {
    try {
        let profile = await Profile.findOne({ user: req.user.id });
        if (!profile) return res.status(400).json({ msg: 'No Profile Found' });
        let deletedProfile = await Profile.findOneAndDelete({ user: req.user.id });
        res.json(deletedProfile);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

async function addFriend(req, res) {
    try {
        const friend = await Profile.findOne({ user: req.body.id });
        const currentUser = await Profile.findOne({ user: req.user.id });
        if (!currentUser || !friend) return res.status(400).json({ msg: 'No Profile Found' });
        if (String(friend) === String(currentUser)) return res.status(400).json({ msg: 'Error: You cannot be friends with yourself' })
        for (let item of currentUser.friends) {
            if (friend.user == item) return res.status(400).json({ msg: 'You are already friends with this user!' })
        }
        friend.friends.push(currentUser.user);
        currentUser.friends.push(friend.user);
        friend.save();
        currentUser.save();
        res.json(currentUser)
    } catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
}

async function removeFriend(req, res) {
    try {
        const user = await Profile.findOne({ user: req.user.id });
        const deletedFriend = await Profile.findOne({ user: req.params.id });
        const idxOfFriend = user.friends.indexOf(req.params.id);
        const idxOfUser = deletedFriend.friends.indexOf(req.user.id);
        if (idxOfFriend < 0 || idxOfUser < 0) return res.status(400).json({ msg: "Friend not found" })
        user.friends.splice(idxOfFriend, 1);
        deletedFriend.friends.splice(idxOfUser, 1);
        user.save();
        deletedFriend.save();
        res.json(user)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

async function getAllFriends(req, res) {
    try {
        const user = await Profile.findOne({ user: req.user.id });
        if (!user) return res.status(400).json({ msg: 'No Profile Found' })
        console.log(user.friends)
        const friendsList = await Profile.find().where('user').in(user.friends).populate('user').exec();
        res.json(friendsList)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error')
    }
}