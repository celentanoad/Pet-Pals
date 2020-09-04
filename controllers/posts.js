const User = require('../models/User');
const Profile = require('../models/Profile');
const Post = require('../models/Post');
const { validationResult } = require('express-validator');

module.exports = {
    addPost,
    getAllPosts,
    getOnePost,
    getPostsByUser,
    deletePost,
    updatePostLike
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
        res.status(500).send('Server Error');
    }
}

async function getAllPosts(req, res) {
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        const posts = await Post.find().where('user').in(profile.friends).exec()
        const userPosts = await Post.find().where('user').in(req.user.id).exec();
        posts.push(...userPosts);
        posts.sort((a, b) => (a.date > b.date) ? -1 : 1);
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

async function getOnePost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        const postUser = await Profile.findOne({ user: post.user });
        if (postUser.user.toString() === req.user.id) return res.json(post);
        if (postUser.user.friends < 1) return res.status(401).json({ msg: 'You need to be friends with this user to see their posts!' });
        for (let friend of postUser.friends) {
            if (friend === req.user.id) return res.json(post);
        }
        res.status(401).json({ msg: 'You need to be friends with this user to see their posts!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

async function getPostsByUser(req, res) {
    try {
        const posts = await Post.find().where('user').in(req.params.id).exec();
        if (posts.length < 1) return res.status(400).json({ msg: 'This user does not have any posts yet!' });
        if (posts[0].user.toString() === req.user.id) {
            posts.sort((a, b) => (a.date > b.date) ? -1 : 1);
            return res.json(posts);
        }
        const postUser = await Profile.findOne({ user: posts[0].user });
        if (postUser.friends < 1) return res.status(400).json({ msg: 'You must be friends with this user to see their posts' });
        for (let friend of postUser.friends) {
            if (friend === req.user.id) return res.json(posts) 
        }
        res.status(400).json({ msg: 'You must be friends with this user to see their posts' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

async function deletePost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.json({ msg: 'Post does not exist' });
        if (post.user.toString() !== req.user.id) return res.status(401).json({ msg: 'You are not authorized to delete this message' });
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.json(deletedPost);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

async function updatePostLike(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.json({ msg: 'Post does not exist' });
        const postUser = await Profile.findOne({ user: post.user });
        const loggedInUser = await Profile.findOne({ user: req.user.id }).populate('user'); 
        let authorized;
        for (friend of postUser.friends) {
            if (post.user.toString() === req.user.id || friend === req.user.id) {
                authorized = true;
            }
        }
        if (authorized) {
            if (post.likes < 1) {
                post.likes.push(loggedInUser);
                post.save();
                return res.json(post);
            }
            if (post.likes.filter(like => like.user._id.toString() === req.user.id).length > 0) {
                let likeIdx;
                for (let i = 0; i < post.likes.length; i++) {
                    if (post.likes[i].user.toString() === req.user.id) likeIdx = i;
                }
                post.likes.splice(likeIdx, 1);
                await post.save();
                return res.json(post);
            }
            post.likes.push(loggedInUser);
            await post.save();
            res.json(post);
        } else {
            res.status(401).json({ msg: 'Not Authorized' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}