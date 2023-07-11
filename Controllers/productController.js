// import Product from "../Model/productSchema.js";
const Product = require("../Model/productSchema");

const getProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "products data not fetch" });
  }
};

const getProductDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getProducts, getProductDetail };
