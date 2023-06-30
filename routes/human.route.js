// ! Human model for crud operations 

const express = require("express");
const controllers = require("../controllers/human.controller")
const app = express();



const HumanRouter = express.Router();
HumanRouter.use(express.json());




// ! Post Request

// Create or add a new  Human ticket book 
HumanRouter.post('/add', controllers.addPerson)



// ! Get Request

// Get the all  Person's  here

HumanRouter.get('/get', controllers.getPerson)

// ! Get the Human by its id

HumanRouter.get('/get/:id', controllers.getSinglePerson)





// ! patch Request

// allow users to update the details of a specific Human identified by its ID.

HumanRouter.patch('/update/:id', controllers.updatePerson)






// ! Delete Request

//allow users to delete a specific Delete identified by its ID.

HumanRouter.delete('/delete/:id', controllers.deletePerson)




module.exports = { HumanRouter }