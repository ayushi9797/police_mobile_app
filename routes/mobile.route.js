// ! Mobile model for crud operations 

const express = require("express");
const controllers = require("../controllers/mobile.controller");
const app = express();



const MobileRouter = express.Router();
MobileRouter.use(express.json());



// ! Post Request

// Create or add a new  Mobile ticket book 
MobileRouter.post('/add', controllers.addMobile)



// ! Get Request

// Get the all  Mobiles here

MobileRouter.get('/get', controllers.getMobile)

// ! Get the Mobile by its id

MobileRouter.get('/get/:id', controllers.getSingleMobile)


// ! patch Request

// allow users to update the details of a specific Mobile identified by its ID.

MobileRouter.patch('/update/:id', controllers.updateMobile)


// ! Delete Request

//allow users to delete a specific Delete identified by its ID.

MobileRouter.delete('/delete/:id', controllers.deleteMobile)




module.exports = { MobileRouter }