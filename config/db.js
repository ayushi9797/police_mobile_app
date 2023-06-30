require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const dbconnection = mongoose.connect(process.env.MONGOURL)


module.exports = {dbconnection} 