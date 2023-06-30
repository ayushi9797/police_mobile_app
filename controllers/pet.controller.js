//! Pet Controller

require("dotenv").config();
const { PetModel } = require("../model/Pet.model");


exports.addPet = async (req, res) => {

    // taking the Pet details from Pet schema from posting in req.body
    let Pet = req.body;
    console.log(Pet);

    try {
        //  creating a new Pet  with use of model schema
        let data = new PetModel(Pet)
        // save data in mongodb instance
        await data.save();
        console.log(data);
        console.log({ message: `Here you can add your Pet details for complain 🚌 ` })
        // if data is correct the send the correct status message
        res.status(201).send({ message: `:${`Thanks for adding new Pet please visit again   🚌`}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `Sorry something error in adding ☹️ your Pet will look into it` })

    }
};

exports.getPet = async (req, res) => {

    try {
        // finding the Pet data
        let data = await PetModel.find()

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get all your Pets details 🚎 ` })
        res.status(200).send({ message: `:${`getting all your Pets details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Pet will look into it` })

    }

};


exports.getSinglePet = async (req, res) => {

    try {
        // finding the Pet data by id 
        let id = req.params.id

        let data = await PetModel.findById(id)

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get  your own  Pets details ` })
        res.status(200).send({ message: `:${`getting all your own  Pets details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Pet will look into it` })

    }

};


exports.updatePet = async (req, res) => {

    try {
        // taking the Pet details from Pet schema for updating in req.body
        let id = req.params.id;
        let Pet = req.body;
        console.log(id, Pet)
        //  finding by its id  and upadting the Pet details
        let data = await PetModel.findByIdAndUpdate(id, Pet)

        console.log(data);
        console.log({ message: `your Pets details is updated now`, data })
        // if data is correct the send the correct status message
        res.status(200).send({ message: `:${`your Pets details is updated now 🚌 `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Pet will look into it` })

    }

};



exports.deletePet = async (req, res) => {

    try {
        // taking the Delete details from Delete schema for updating in req.body
        let id = req.params.id;

        console.log(id)
        //  finding by its id  and deleting the Delete details
        let data = await PetModel.findByIdAndDelete(id)

        console.log(data);
        console.log({ message: ` your Pet deleted`, data })
        // if data is correct the send the correct status message
        res.status(202).send({ message: `:${`Your Pet deleted   `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in deleting  ☹️  Pet's will look into it` })

    }

};