const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config()

//import routes
const userRoutes = require("./routes/userRoutes")

//dbConnection
require("./db/conn");

//import model
const User = require("./models/user");
const app = express()
app.use(express.json());

app.use(bodyParser.json())
//routes
app.use(cors());
app.use("/api/users", userRoutes)



app.listen(4000, () => {
  console.log('Server started on port 4000!');
});