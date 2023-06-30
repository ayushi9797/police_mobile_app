const mongoose = require('mongoose');

const HumanSchema = new mongoose.Schema({
    person_name: String,
    person_aadharNumber: String,
    person_date:Date,
    person_time: Date,
    PoliceStation: String
    

})

const HumanModel = mongoose.model('Humans', HumanSchema)

module.exports = { HumanModel }