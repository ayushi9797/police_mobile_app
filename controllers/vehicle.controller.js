//! Vehicle Controller

require("dotenv").config();
const { VehicleModel } = require("../model/Vehicle.model");


exports.addVehicle = async (req, res) => {

    // taking the Vehicle details from Vehicle schema from posting in req.body
    let Vehicle = req.body;
    console.log(Vehicle);

    try {
        //  creating a new Vehicle  with use of model schema
        let data = new VehicleModel(Vehicle)
        // save data in mongodb instance
        await data.save();
        console.log(data);
        console.log({ message: `Here you can add your vehicle details for complain 🚌 ` })
        // if data is correct the send the correct status message
        res.status(201).send({ message: `:${`Thanks for adding new vehicle please visit again   🚌`}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `Sorry something error in adding ☹️ your vehicle will look into it` })

    }
};

exports.getVehicle = async (req, res) => {

    try {
        // finding the Vehicle data
        let data = await VehicleModel.find()

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get all your vehicles details 🚎 ` })
        res.status(200).send({ message: `:${`getting all your vehicles details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your vehicle will look into it` })

    }

};


exports.getSingleVehicle = async (req, res) => {

    try {
        // finding the Vehicle data by id 
        let id = req.params.id

        let data = await VehicleModel.findById(id)

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get  your own  vehicles details ` })
        res.status(200).send({ message: `:${`getting all your own  vehicles details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your vehicle will look into it` })

    }

};


exports.updateVehicle = async (req, res) => {

    try {
        // taking the Vehicle details from Vehicle schema for updating in req.body
        let id = req.params.id;
        let Vehicle = req.body;
        console.log(id, Vehicle)
        //  finding by its id  and upadting the Vehicle details
        let data = await VehicleModel.findByIdAndUpdate(id, Vehicle)

        console.log(data);
        console.log({ message: `your vehicles details is updated now`, data })
        // if data is correct the send the correct status message
        res.status(200).send({ message: `:${`your vehicles details is updated now 🚌 `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your vehicle will look into it` })

    }

};



exports.deleteVehicle = async (req, res) => {

    try {
        // taking the Delete details from Delete schema for updating in req.body
        let id = req.params.id;

        console.log(id)
        //  finding by its id  and deleting the Delete details
        let data = await VehicleModel.findByIdAndDelete(id)

        console.log(data);
        console.log({ message: ` your vehicle deleted`, data })
        // if data is correct the send the correct status message
        res.status(202).send({ message: `:${`Your vehicle deleted   `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in deleting  ☹️  Vehicle's will look into it` })

    }

};