const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    pet_breed: String,
    pet_picture: String,
    pet_color: String,
    pet_date: Date,
    pet_time: Date,
    PoliceStation: String


})

const PetModel = mongoose.model('Pets', PetSchema)

module.exports = { PetModel }