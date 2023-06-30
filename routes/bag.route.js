// ! Bags model for crud operations 

const express = require("express");
const controllers = require("../controllers/bag.controller");
const app = express();



const BagsRouter = express.Router();
BagsRouter.use(express.json());



// ! Post Request

// Create or add a new  Bags ticket book 
BagsRouter.post('/add', controllers.addBags)



// ! Get Request

// Get the all  Bagss here

BagsRouter.get('/get', controllers.getBags)

// ! Get the Bags by its id

BagsRouter.get('/get/:id', controllers.getSingleBags)


// ! patch Request

// allow users to update the details of a specific Bags identified by its ID.

BagsRouter.patch('/update/:id', controllers.updateBags)


// ! Delete Request

//allow users to delete a specific Delete identified by its ID.

BagsRouter.delete('/delete/:id', controllers.deleteBags)




module.exports = { BagsRouter }