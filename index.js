// import express from "express";
const express = require("express");
const app = express();
// const port = 8000;
require("dotenv").config();

// import cors from "cors";
const cors = require("cors");
// import bodyParser from "body-parser";
const bodyParser = require("body-parser");
// import Router from "./Router/routes.js";
const Router = require("./Router/routes");
// import connectDB from "./Database/db.js";
const connectDB = require("./Database/db");
// import cookieParser from "cookie-parser";
const cookieParser = require("cookie-parser");
// import path from "path";
const path = require("path");
// import { insertData } from "./dataProvider.js";
// const insertData = require("./dataProvider");

// middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/", Router);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});
app.get("/", (req, res) => {
  res.send("app is running");
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running at port number ${process.env.PORT}`);
});
// insertData();
