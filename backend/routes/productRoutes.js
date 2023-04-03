import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

//@desc fetch all products
//@routes GET /api/products
//@access Public

router.get("/", async (req, res) => {
  const products = await Product.find({});

  res.json;
});

//@desc fetch single products
//@routes GET /api/products/:id
//@access Public

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
