// import mongoose from "mongoose";
const mongoose = require("mongoose");
// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs");
// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    requird: true,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.genrateAuthToken = async function () {
  try {
    const token = await jwt.sign({ _id: this._id }, "mynameisgouravvasale");
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    res.send(`Authentication token error`, error);
  }
};

const User = mongoose.model("user", userSchema);

// export default User;
module.exports = User;
