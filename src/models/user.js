const mongoose = require('mongoose')

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,

    },
    bio: {
        type: String
    },
    tweets: {
        type: Schema.Types.ObjectId,

    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;