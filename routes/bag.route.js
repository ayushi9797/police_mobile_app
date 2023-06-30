// ! Bag model for crud operations 

const express = require("express");
const controllers = require("../controllers/bag.controller");
const app = express();



const BagRouter = express.Router();
BagRouter.use(express.json());



// ! Post Request

// Create or add a new  Bag ticket book 
BagRouter.post('/add', controllers.addBag)



// ! Get Request

// Get the all  Bags here

BagRouter.get('/get', controllers.getBag)

// ! Get the Bag by its id

BagRouter.get('/get/:id', controllers.getSingleBag)


// ! patch Request

// allow users to update the details of a specific Bag identified by its ID.

BagRouter.patch('/update/:id', controllers.updateBag)


// ! Delete Request

//allow users to delete a specific Delete identified by its ID.

BagRouter.delete('/delete/:id', controllers.deleteBag)




module.exports = { BagRouter }