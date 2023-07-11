// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");
// import User from "../Model/userschema.js";
const User = require("../Model/userSchema");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    clg(`cookie jwt ${token}`);
    const verifyUser = jwt.verify(token, "mynameisgouravvasale");
    const user = await User.findOne({ _id: verifyUser._id });
    console.log(user);
    next();
  } catch (error) {
    console.log(`cookie ${error} `);
  }
};

export default auth;
module.exports = auth;
