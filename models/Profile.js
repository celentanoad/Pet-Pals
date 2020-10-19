const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    avatar: {
        type: String,
        default: 'https://i.imgur.com/poOIakq.png'
    },
    bio: {
        type: String
    },
    animal: {
        type: String,
        required: true
    },
    breed: {
        type: String
    },
    friends: {
        type: [String]
    }
})

module.exports = mongoose.model('Profile', ProfileSchema);