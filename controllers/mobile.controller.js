//! Mobile Controller

require("dotenv").config();
const { MobileModel } = require("../model/mobile.model");


exports.addMobile = async (req, res) => {

    // taking the Mobile details from Mobile schema from posting in req.body
    let Mobile = req.body;
    console.log(Mobile);

    try {
        //  creating a new Mobile  with use of model schema
        let data = new MobileModel(Mobile)
        // save data in mongodb instance
        await data.save();
        console.log(data);
        console.log({ message: `Here you can add your Mobile details for complain 🚌 ` })
        // if data is correct the send the correct status message
        res.status(201).send({ message: `:${`Thanks for adding new Mobile please visit again   🚌`}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `Sorry something error in adding ☹️ your Mobile will look into it` })

    }
};

exports.getMobile = async (req, res) => {

    try {
        // finding the Mobile data
        let data = await MobileModel.find()

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get all your Mobiles details 🚎 ` })
        res.status(200).send({ message: `:${`getting all your Mobiles details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Mobile will look into it` })

    }

};


exports.getSingleMobile = async (req, res) => {

    try {
        // finding the Mobile data by id 
        let id = req.params.id

        let data = await MobileModel.findById(id)

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get  your own  Mobiles details ` })
        res.status(200).send({ message: `:${`getting all your own  Mobiles details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Mobile will look into it` })

    }

};


exports.updateMobile = async (req, res) => {

    try {
        // taking the Mobile details from Mobile schema for updating in req.body
        let id = req.params.id;
        let Mobile = req.body;
        console.log(id, Mobile)
        //  finding by its id  and upadting the Mobile details
        let data = await MobileModel.findByIdAndUpdate(id, Mobile)

        console.log(data);
        console.log({ message: `your Mobiles details is updated now`, data })
        // if data is correct the send the correct status message
        res.status(200).send({ message: `:${`your Mobiles details is updated now 🚌 `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Mobile will look into it` })

    }

};



exports.deleteMobile = async (req, res) => {

    try {
        // taking the Delete details from Delete schema for updating in req.body
        let id = req.params.id;

        console.log(id)
        //  finding by its id  and deleting the Delete details
        let data = await MobileModel.findByIdAndDelete(id)

        console.log(data);
        console.log({ message: ` your Mobile deleted`, data })
        // if data is correct the send the correct status message
        res.status(202).send({ message: `:${`Your Mobile deleted   `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in deleting  ☹️  Mobile's will look into it` })

    }

};