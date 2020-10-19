const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            text: { 
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            },
            name: {
                type: String
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('Post', PostSchema);