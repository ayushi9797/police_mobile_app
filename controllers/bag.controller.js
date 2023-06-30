//! Bags Controller

require("dotenv").config();
const { BagsModel } = require("../model/bags.model");


exports.addBags = async (req, res) => {

    // taking the Bags details from Bags schema from posting in req.body
    let Bags = req.body;
    console.log(Bags);

    try {
        //  creating a new Bags  with use of model schema
        let data = new BagsModel(Bags)
        // save data in mongodb instance
        await data.save();
        console.log(data);
        console.log({ message: `Here you can add your Bags details for complain 🚌 ` })
        // if data is correct the send the correct status message
        res.status(201).send({ message: `:${`Thanks for adding new Bags please visit again   🚌`}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `Sorry something error in adding ☹️ your Bags will look into it` })

    }
};

exports.getBags = async (req, res) => {

    try {
        // finding the Bags data
        let data = await BagsModel.find()

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get all your Bagss details 🚎 ` })
        res.status(200).send({ message: `:${`getting all your Bagss details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Bags will look into it` })

    }

};


exports.getSingleBags = async (req, res) => {

    try {
        // finding the Bags data by id 
        let id = req.params.id

        let data = await BagsModel.findById(id)

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get  your own  Bagss details ` })
        res.status(200).send({ message: `:${`getting all your own  Bagss details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Bags will look into it` })

    }

};


exports.updateBags = async (req, res) => {

    try {
        // taking the Bags details from Bags schema for updating in req.body
        let id = req.params.id;
        let Bags = req.body;
        console.log(id, Bags)
        //  finding by its id  and upadting the Bags details
        let data = await BagsModel.findByIdAndUpdate(id, Bags)

        console.log(data);
        console.log({ message: `your Bagss details is updated now`, data })
        // if data is correct the send the correct status message
        res.status(200).send({ message: `:${`your Bagss details is updated now 🚌 `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Bags will look into it` })

    }

};



exports.deleteBags = async (req, res) => {

    try {
        // taking the Delete details from Delete schema for updating in req.body
        let id = req.params.id;

        console.log(id)
        //  finding by its id  and deleting the Delete details
        let data = await BagsModel.findByIdAndDelete(id)

        console.log(data);
        console.log({ message: ` your Bags deleted`, data })
        // if data is correct the send the correct status message
        res.status(202).send({ message: `:${`Your Bags deleted   `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in deleting  ☹️  Bags's will look into it` })

    }

};