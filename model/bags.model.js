const mongoose = require('mongoose');

const BagsSchema = new mongoose.Schema({
    bag_type: String,
    bag_ownerName: String,
    bag_date: Date,
    bag_time: Date,
    PoliceStation: String


})

const BagsModel = mongoose.model('Bagss', BagsSchema)

module.exports = { BagsModel }