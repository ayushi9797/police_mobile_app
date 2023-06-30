//! Other Controller

require("dotenv").config();
const { OtherModel } = require("../model/otherType.model");


exports.addOther = async (req, res) => {

    // taking the Other details from Other schema from posting in req.body
    let Other = req.body;
    console.log(Other);

    try {
        //  creating a new Other  with use of model schema
        let data = new OtherModel(Other)
        // save data in mongodb instance
        await data.save();
        console.log(data);
        console.log({ message: `Here you can add your Other details for complain 🚌 ` })
        // if data is correct the send the correct status message
        res.status(201).send({ message: `:${`Thanks for adding new Other please visit again   🚌`}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `Sorry something error in adding ☹️ your Other will look into it` })

    }
};

exports.getOther = async (req, res) => {

    try {
        // finding the Other data
        let data = await OtherModel.find()

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get all your Others details 🚎 ` })
        res.status(200).send({ message: `:${`getting all your Others details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Other will look into it` })

    }

};


exports.getSingleOther = async (req, res) => {

    try {
        // finding the Other data by id 
        let id = req.params.id

        let data = await OtherModel.findById(id)

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get  your own  Others details ` })
        res.status(200).send({ message: `:${`getting all your own  Others details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Other will look into it` })

    }

};


exports.updateOther = async (req, res) => {

    try {
        // taking the Other details from Other schema for updating in req.body
        let id = req.params.id;
        let Other = req.body;
        console.log(id, Other)
        //  finding by its id  and upadting the Other details
        let data = await OtherModel.findByIdAndUpdate(id, Other)

        console.log(data);
        console.log({ message: `your Others details is updated now`, data })
        // if data is correct the send the correct status message
        res.status(200).send({ message: `:${`your Others details is updated now 🚌 `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Other will look into it` })

    }

};



exports.deleteOther = async (req, res) => {

    try {
        // taking the Delete details from Delete schema for updating in req.body
        let id = req.params.id;

        console.log(id)
        //  finding by its id  and deleting the Delete details
        let data = await OtherModel.findByIdAndDelete(id)

        console.log(data);
        console.log({ message: ` your Other deleted`, data })
        // if data is correct the send the correct status message
        res.status(202).send({ message: `:${`Your Other deleted   `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in deleting  ☹️  Other's will look into it` })

    }

};