const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
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

module.exports = Profile = mongoose.model('Profile', ProfileSchema);