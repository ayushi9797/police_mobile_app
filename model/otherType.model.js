const mongoose = require('mongoose');

const OtherSchema = new mongoose.Schema({
    other_description: String,
    
    other_date: Date,
    other_time: Date,
    PoliceStation: String


})

const OtherModel = mongoose.model('others', OtherSchema)

module.exports = { OtherModel }