const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./mongoose/MongoDb.js");
const Router = require("./Routes/Router.js");

dotenv.config();                //to use the .env file
connectDB();                 //calling the mongodb connection 
const app = express();
app.use(express.json());

app.use('/', Router);

const PORT = process.env.PORT;      //assigning the PORT number from .env file
app.listen(PORT, console.log(`listening on port no- ${PORT}`));