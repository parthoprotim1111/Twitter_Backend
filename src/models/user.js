const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

    },
    name: {
        type: String,

    }
})

// config bcrypt for password encryption

userSchema.pre('save', function (next) {
    const salt = bcrypt.genSaltSync(9);
    const encryptedPass = bcrypt.hashSync(this.password, salt);
    this.password = encryptedPass;
    next();

})

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password)
}


const User = mongoose.model('User', userSchema);
module.exports = User;