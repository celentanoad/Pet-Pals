const express = require('express');
const router = express.Router();
const userCtrl = require('../../controllers/users');
const { check, validationResult } = require('express-validator');
const auth = require('../../config/auth');


/* ----- Public Route ----- */
// POST api/users
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email address').isEmail(),
    check('password', 'Password cannot be blank').isLength({ min: 1 })
], userCtrl.addUser);

/* ----- Private Route ----- */
// DELETE api/users/myaccount
// Delete user
router.delete('/myaccount', auth, userCtrl.deleteUser);

module.exports = router;