const express = require('express');
const router = express.Router();
const auth = require('../../config/auth');
const postCtrl = require('../../controllers/posts');
const { check } = require('express-validator');


/* ----- Private Routes ----- */
// POST to api/posts
// Create a post
router.post('/', [auth, [
    check('text', 'Text field is required')
        .not()
        .isEmpty()
    ]], postCtrl.addPost);

// GET to api/posts
// Get all posts from friends and logged in user
router.get('/', auth, postCtrl.getAllPosts);

// GET to api/posts/:id
// Get post by id
router.get('/:id', auth, postCtrl.getOnePost);

// GET to api/posts/user/:id
// Get all posts by userID
router.get('/user/:id', auth, postCtrl.getPostsByUser);

// DELETE to api/posts/:id
// Delete post
router.delete('/:id', auth, postCtrl.deletePost);

// PUT to api/posts/like/:id
// Update posts when user "likes"
router.put('/like/:id', auth, postCtrl.updatePostLike);

// PUT to api/posts/comment/:id
// Update posts when user comments
router.put('/comment/:id', [auth, [
    check('text', 'Text field is required')
        .not()
        .isEmpty()
]], postCtrl.addComment);

// DELETE to api/posts/comment/:id/:comment_id
// Delete comment from post
router.delete('/comment/:id/:comment_id', auth, postCtrl.deleteComment);

module.exports = router;