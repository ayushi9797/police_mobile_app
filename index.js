const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

require("dotenv").config();


const { dbconnection } = require("./config/db");
const { UserRouter } = require("./routes/user.route");
const { authenticate } = require("./middlewares/authenticate.middleware");
const { LogsData } = require("./middlewares/log.middleware");
const { GntRouter } = require("./routes/generateNewToken.route");
const { LogoutRouter } = require("./routes/logout.route");
const { VehicleRouter } = require("./routes/vehicle.route");
const { HumanRouter } = require("./routes/human.route");
const { PetRouter } = require("./routes/pet.route");
const { BagsRouter } = require("./routes/bag.route");
const { MobileRouter } = require("./routes/mobile.route");
const { OtherRouter } = require("./routes/other.route");


// --------------->>>>>>>> Middlewares <<<<<<<<-------------------

app.use(cors());
app.use(cookieParser());
app.use(express.json());


// --------------->>>>>>>> Default End Point <<<<<<<<-------------------

app.get("/", (req, res) => res.send(`<h1 style="text-align:Center;color:purple">Welcome Home  API</h1>`));



// --------------->>>>>>>> Routers <<<<<<<<-------------------
app.use(LogsData);
app.use("/user", UserRouter);

app.use(authenticate);
app.use("/newtoken", GntRouter);
app.use("/logout", LogoutRouter);
app.use("/vehicle", VehicleRouter);
app.use("/person", HumanRouter);
app.use("/pet", PetRouter);
app.use("/bag", BagsRouter);
app.use("/mobile", MobileRouter);
app.use("/other", OtherRouter)


// --------------->>>>>>>> Server Running <<<<<<<<-------------------

app.listen(process.env.PORT, async () => {
  try {
    dbconnection;
    console.log(`Connected to Database`);
    console.log(`Server listening on ${process.env.PORT}`);
  } catch (error) {
    console.log({ error: `error in connections with the  port: ${error.message}` });
  }
});
