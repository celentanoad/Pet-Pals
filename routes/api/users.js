const express = require('express');
const router = express.Router();
const userCtrl = require('../../controllers/users');
const { check, validationResult } = require('express-validator');


/* ----- Public Route ----- */
// GET api/users
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email address').isEmail(),
    check('password', 'Password cannot be blank').isLength({ min: 1 })
], userCtrl.addUser);


module.exports = router;