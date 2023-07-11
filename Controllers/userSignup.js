// import User from "../Model/userschema.js";
const User = require("../Model/userSchema");
// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs");

const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      res.status(401).json({ message: "user already exist" });
    } else {
      let user = new User(req.body);
      const token = await user.genrateAuthToken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      user = await user.save();
      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const userLogin = async (req, res) => {
  try {
    const firstname = req.body.firstname;
    const password = req.body.password;
    let user = await User.findOne({ firstname });
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.status(200).json({ message: "user succesfully login" });
    } else {
      res.status(400).send(`password is not match`);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = { userSignup, userLogin };
