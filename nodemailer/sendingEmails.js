const nodemailer = require("nodemailer");

require("dotenv").config();

const sendEmail = async (data) => {

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'soniayushi345@gmail.com',
      pass: process.env.GOOGLEKEY
  }
  });

  transporter.sendMail({
    to: `${data.email}`,
    from: 'soniayushi345@gmail.com',
    subject: data.subject,
    html: data.body,
  })
  .then(()=>console.log('mail sent successfully'))
  .catch((err)=>console.log("err",err))

}








module.exports = { sendEmail }

// sendEmail({email : xyz@gmail.com,subject : "this is subject",body : "email content"})

