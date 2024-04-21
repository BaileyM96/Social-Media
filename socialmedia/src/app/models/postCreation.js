const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const postSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    likes: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

module.exports = Post;