const User = require('../models/User');
const Profile = require('../models/Profile');
const Post = require('../models/Post');
const { validationResult } = require('express-validator');

module.exports = {
    addPost
}

async function addPost(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user');
        if (!profile) return res.status(400).json({ msg: 'You must make a profile first!' });
        const newPost = {
            text: req.body.text,
            user: profile.user,
            name: profile.user.name,
            avatar: profile.avatar
        }
        post = await new Post(newPost);
        post.save();
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}