// ! vehicle model for crud operations 

const express = require("express");
const controllers = require("../controllers/vehicle.controller");
const app = express();



const VehicleRouter = express.Router();
VehicleRouter.use(express.json());



// ! Post Request

// Create or add a new  Vehicle ticket book 
VehicleRouter.post('/add', controllers.addVehicle)



// ! Get Request

// Get the all  Vehicles here

VehicleRouter.get('/get', controllers.getVehicle)

// ! Get the Vehicle by its id

VehicleRouter.get('/get/:id', controllers.getSingleVehicle)


// ! patch Request

// allow users to update the details of a specific Vehicle identified by its ID.

VehicleRouter.patch('/update/:id', controllers.updateVehicle)


// ! Delete Request

//allow users to delete a specific Delete identified by its ID.

VehicleRouter.delete('/delete/:id', controllers.deleteVehicle)




module.exports = { VehicleRouter }