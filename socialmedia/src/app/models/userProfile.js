const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const FriendRequest = require('./friendRequest');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    sentFriendRequest: [{
        type: Schema.Types.ObjectId,
        ref: 'FriendRequest',
    }],
    receivedFriendRequest: [{
        type: Schema.Types.ObjectId,
        ref: 'FriendRequest',
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
}, {
    timestamps: true,
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.models.User || mongoose.model('User', userSchema)

module.exports = User;