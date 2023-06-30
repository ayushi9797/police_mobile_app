// ! Pet model for crud operations 

const express = require("express");
const controllers = require("../controllers/pet.controller");
const app = express();



const PetRouter = express.Router();
PetRouter.use(express.json());



// ! Post Request

// Create or add a new  Pet ticket book 
PetRouter.post('/add', controllers.addPet)



// ! Get Request

// Get the all  Pets here

PetRouter.get('/get', controllers.getPet)

// ! Get the Pet by its id

PetRouter.get('/get/:id', controllers.getSinglePet)


// ! patch Request

// allow users to update the details of a specific Pet identified by its ID.

PetRouter.patch('/update/:id', controllers.updatePet)


// ! Delete Request

//allow users to delete a specific Delete identified by its ID.

PetRouter.delete('/delete/:id', controllers.deletePet)




module.exports = { PetRouter }