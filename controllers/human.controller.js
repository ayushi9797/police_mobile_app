require("dotenv").config();

const { HumanModel } = require("../model/human.model");

// ! Add Person
exports.addPerson = async (req, res) => {

    // taking the Human details from Human schema from posting in req.body
    let Human = req.body;
    console.log(Human);

    try {
        //  creating a new Human  with use of model schema
        let data = new HumanModel(Human)
        // save data in mongodb instance
        await data.save();
        console.log(data);
        console.log({ message: `Here you can add your Person's details for complain 🚌 ` })
        // if data is correct the send the correct status message
        res.status(201).send({ message: `:${`Thanks for adding new Person's details  please visit again   🚌`}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `Ssorry something error in adding ☹️ your missing person's details  will look into it` })

    }

}

// ! Get person details

exports.getPerson = async (req, res) => {

    try {
        // finding the Human data
        let data = await HumanModel.find()

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get all your Person's  details 🚎 ` })
        res.status(200).send({ message: `:${`getting all your Person's  details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Person's will look into it` })

    }

}

// ! Get Single Person Details 


exports.getSinglePerson = async (req, res) => {

    try {
        // finding the Human data by id 
        let id = req.params.id

        let data = await HumanModel.findById(id)

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `Here you get  your own  Person's  details ` })
        res.status(200).send({ message: `:${`getting all your own  Person's  details 🚎  `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your person's will look into it` })

    }

}


// ! Update Person details 


exports.updatePerson = async (req, res) => {

    try {
        // taking the Human details from Human schema for updating in req.body
        let id = req.params.id;
        let Human = req.body;
        console.log(id, Human)
        //  finding by its id  and upadting the Human details
        let data = await HumanModel.findByIdAndUpdate(id, Human)

        console.log(data);
        console.log({ message: `your Person's  details is updated now`, data })
        // if data is correct the send the correct status message
        res.status(200).send({ message: `:${`your Person's  details is updated now 🚌 `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in getting ☹️ your Person's will look into it` })

    }

}

// ! Delete the person details 

exports.deletePerson = async (req, res) => {

    try {
        // taking the Delete details from Delete schema for updating in req.body
        let id = req.params.id;

        console.log(id)
        //  finding by its id  and deleting the Delete details
        let data = await HumanModel.findByIdAndDelete(id)

        console.log(data);
        console.log({ message: ` Your entry complain detail is deleted now  `, data })
        // if data is correct the send the correct status message
        res.status(200).send({ message: `:${` Your entry complain detail is deleted now`}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `sorry something error in deleting  ☹️  Person's will look into it` })

    }

}

