// ! Other model for crud operations 

const express = require("express");
const controllers = require("../controllers/other.controller");
const app = express();



const OtherRouter = express.Router();
OtherRouter.use(express.json());



// ! Post Request

// Create or add a new  Other ticket book 
OtherRouter.post('/add', controllers.addOther)



// ! Get Request

// Get the all  Others here

OtherRouter.get('/get', controllers.getOther)

// ! Get the Other by its id

OtherRouter.get('/get/:id', controllers.getSingleOther)


// ! patch Request

// allow users to update the details of a specific Other identified by its ID.

OtherRouter.patch('/update/:id', controllers.updateOther)


// ! Delete Request

//allow users to delete a specific Delete identified by its ID.

OtherRouter.delete('/delete/:id', controllers.deleteOther)




module.exports = { OtherRouter }