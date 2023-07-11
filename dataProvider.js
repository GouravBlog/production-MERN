// import Product from "./Model/productSchema.js";
const Product = require("./Model/productSchema");
// import products from "./data.js";
const products = require("./data");

const insertData = async () => {
  try {
    await Product.deleteMany();
    let data = Product.create(products);
    data = await data.save();
    console.log("data insert succesfully");
  } catch (error) {
    console.log("data not insert ");
  }
};
module.exports = insertData;
