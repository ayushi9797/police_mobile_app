const mongoose = require('mongoose');

const PoliceStationSchema = new mongoose.Schema({
    policeStation_state: String,
    policeStation_city: String,
    policeStation_name: String,
    policeStation_number: Number,


})

const PoliceStationModel = mongoose.model('policeStations', PoliceStationSchema)

module.exports = { PoliceStationModel }