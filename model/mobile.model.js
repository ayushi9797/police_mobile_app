const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    mobile_model: String,
    mobile_IEMI_Number: Number,
    mobile_date: Date,
    mobile_time: Date,
    mobile_ownerName: String,
    mobile_ownerNumber: Number,
    PoliceStation: String


})

const MobileModel = mongoose.model('mobiles', MobileSchema)

module.exports = { MobileModel }