import express from "express";
import { getProducts } from "../../handlers/products/products.handler.js";

const productsRouter = express.Router();

// Get products
productsRouter.get("/products", async (req, res) => {
  try {
    const data = await getProducts();

    if (data.status === "ok") {
      return res.status(200).send({ message: data.message, data: data.data });
    }

    return res.status(500).send({ message: data.message, data: [] });
  } catch (error) {
    console.error("Error in GET /products:", error);
    return res.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default productsRouter;
