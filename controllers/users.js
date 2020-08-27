const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtToken = process.env.JWT_SECRET;

module.exports = {
    addUser
}

async function addUser(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if(user) return res.status(400).json({ errors: [ { msg: 'User already exists' }]});
        user = new User ({
            name,
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, jwtToken, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch(err) {
        console.err(err.message);
        res.status(500).send('Server error');
    }
}