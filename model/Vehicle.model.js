const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    vehicle_type: String,
    vehicle_date: Date,
    vehicle_time: Date,
    vehicle_brand: String,
    vehicle_color: String,
    vehicle_location: String,
    vehicle_image: String,
    police_station: String

})

const VehicleModel = mongoose.model('vehicles', VehicleSchema)

module.exports = { VehicleModel }