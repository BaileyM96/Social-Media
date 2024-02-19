const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const friendRequestSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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

const FriendRequest = mongoose.models.FriendRequest || mongoose.model('FriendRequest', friendRequestSchema)

module.exports = FriendRequest;