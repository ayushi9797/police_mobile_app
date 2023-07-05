const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    picture: String,
    userid: String
})

const UserModel = mongoose.model('user', UserSchema)

module.exports = { UserModel };