const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require("dotenv").config();
const Admin = require("../model/admin.model");
const app = express();

const AdminRouter = express.Router();
AdminRouter.use(express.json());


// !  Admin register route
AdminRouter.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const isPresent = await Admin.find({ email });

        if (isPresent.length === 0) {
            // encrypte password and register
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) res.status(401).json({ "error ": err.message });
                else {
                    const newAdmin = new Admin({
                        name,
                        email,
                        password: hash,
                    });
                    await newAdmin.save();
                    res.status(200).json({ success: "Admin registered successfully", newAdmin });
                }
            });
        } else {
            res.status(404).json({ msg: "Admin already registered" });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


// ! Admin login Route 

AdminRouter.post('/login', async (req, res) => {
    // destructuring email and password from schema
    const { email, password } = req.body
    console.log(req.body)

    try {

        //  finding admin by its email

        const admin = await Admin.findOne({ email })
        console.log(admin);

        // used the hashed password
        const hashed_password = admin?.password;
        // console.log(hashed_password);

        //  if the admin is matched with registered details then comparing the details
        if (admin) {
            bcrypt.compare(password, hashed_password, async function (err, result) {

                // if the result is true then 
                if (result) {

                    // we generate a token for authentication purposes with the expiry timeline and secret key
                    const token = jwt.sign({ admin_id: admin._id }, 'admin', {
                        expiresIn: "7d",
                    });
                    // console.log(token);


                    //  if respond is correct then send the login successful message
                    res.send({ token, message: `admin successfully login 💕`, admin_id: admin._id })
                } else {
                    console.log(err.message);
                }
            });
        } else {

            // Otherwise we send the login failed message
            console.log(`Sorry admin need to register agan`);
            res.status(404).send({ message: `Sorry your password got missmatched  ☹️ check your details` });
        }

    } catch (error) {
        // if error is comimg in login then send login failed message
        console.log({ error: error.message })
        res.status(404).send({ message: `Error ☹️ in login the adminS : ${error.message}` });

    }

})

// 
// AdminRouter.get('/get', function (req, res) {
//     let admin = 
// })





module.exports = { AdminRouter }

