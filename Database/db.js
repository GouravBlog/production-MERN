// import { connect } from "mongoose";
const mongoose = require("mongoose");
// import "dotenv/config";
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected succesfully");
  } catch (error) {
    console.log("database not connected ");
  }
};

// export default connectDB;
module.exports = connectDB;
