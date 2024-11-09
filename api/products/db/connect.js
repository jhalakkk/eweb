// const mongoose = require("mongoose");

// const connectDB = (uri) => {
//     return mongoose.connect(process.env.MONGODB_URL);
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
require("dotenv").config();

// connecting to our database
mongoose.connect(process.env.MONGODB_URL);

// checking for connection
const db = mongoose.connection;

// if there is an error
db.on("error", console.error.bind(console, "connection error:"));

// if connection is successfull
db.once("open", () => {
  console.log("Database successfully connected!!");
});