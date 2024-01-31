const mongoose = require('mongoose')
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userProfileSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    userName: {
        type:String,
        required: true,
        unique: true
    }
});

userProfileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const SALTROUNDS = 10;
        this.password = await bcrypt.hash(this.password, SALTROUNDS);
    }
    next();
});

userProfileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const userProfile = mongoose.model('userProfile', userProfileSchema);

module.exports = userProfile;