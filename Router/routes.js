// import express from "express";
const express = require("express");
const router = express.Router();
// import { userSignup, userLogin } from "../Controllers/userSignup.js";
const { userSignup } = require("../Controllers/userSignup");
const { userLogin } = require("../Controllers/userSignup");
// import {getProducts,getProductDetail} from "../Controllers/productController.js";
const { getProducts } = require("../Controllers/productController");
const { getProductDetail } = require("../Controllers/productController");

router.route("/signup").post(userSignup);
router.route("/login").post(userLogin);

router.route("/products").get(getProducts);
router.route("/product/:id").get(getProductDetail);

// export default router;
module.exports = router;
