const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default: 'https://i.imgur.com/poOIakq.png'
    },
})

module.exports = Profile = mongoose.model('Profile', ProfileSchema);