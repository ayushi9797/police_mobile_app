const express = require ("express");

// --------------->>>>>>>> Male Service Router <<<<<<<<-------------------
const {signup ,login } = require("../controllers/user.controller");

const UserRouter = express.Router();



// --------->>>> POST SIGN UP <<<<<---------
UserRouter.post("/register", signup);

// --------->>>> POST <<<<<--------- 
UserRouter.post("/login", login);

module.exports = { UserRouter }  

