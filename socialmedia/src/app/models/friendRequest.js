const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const User = require('./userProfile');

const friendRequestSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'ACCEPTED', 'DENIED'],
        required: true
    },
}, {
    timestamps: true,
});

const FriendRequest = mongoose.models.FriendRequest || mongoose.model('Friend', friendRequestSchema)

module.exports = FriendRequest;