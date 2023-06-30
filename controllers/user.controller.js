const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();

const { UserModel } = require("../model/user.model");
// const { sendEmail } = require("../nodemailer/sendingEmails");


const signup = async (req, res) => {
    try {
        const { name, email, phoneNumber, password } = req.body;
        const isPresent = await UserModel.find({ email });

        if (isPresent.length === 0) {
            // encrypte password and register
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) res.status(401).json({ "error ": err.message });
                else {
                    const newUser = new UserModel({
                        name,
                        email,
                        phoneNumber,
                        password: hash,
                    });
                    await newUser.save();
                    res.status(200).json({ success: "user registered successfully", newUser });
                }
            });
        } else {
            res.status(404).json({ msg: "user already registered" });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// login

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const UserData = await UserModel.findOne({ email });

        if (!UserData) {
            res.status(404).json({ message: "user not found" });
        }

        // hash password form UserData(db.users)
        const hashPassword = UserData?.password;

        // compare  

        bcrypt.compare(password, hashPassword, (err, result) => {
            if (result) {
                // send otp
                const otp = Math.round((Math.random() * 9999))
                console.log(otp)
                sendEmail({ email: email, subject: "Login OTP", body: ` Police club : Hello ${email}. Your login OTP is ${otp}` })

                // generate tokens 
                const Normal_Token = jwt.sign({ userId: UserData._id }, process.env.NORMALKEY, { expiresIn: "7d" })
                const Refresh_Token = jwt.sign({ userId: UserData._id }, process.env.REFRESHKEY, { expiresIn: "7d" })

                // send token in cookies
                res.cookie("Normal_Token", Normal_Token, { httpOnly: true })
                res.cookie("Refresh_Token", Refresh_Token, { httpOnly: true })
                res.status(200).json({ "message": "Login successfully", Normal_Token, Refresh_Token, name: UserData["name"], email, userid: UserData["_id"], otp: otp });
            }
            else {
                res.status(401).json({ "message": "error while login" });
            }
        })


    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}


module.exports = { signup, login }
