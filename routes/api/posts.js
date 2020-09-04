const express = require('express');
const router = express.Router();
const auth = require('../../config/auth');
const postCtrl = require('../../controllers/posts');
const { check } = require('express-validator');


/* ----- Private Routes ----- */
// POST to api/posts
router.post('/', [auth, [
    check('text', 'Text field is required')
        .not()
        .isEmpty()
    ]], postCtrl.addPost);

router.get('/', auth, postCtrl.getAllPosts);

module.exports = router;