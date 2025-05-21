import express from "express";
import multer from "multer";
import {
  addProduct,
  deleteProduct,
  getProductById,
  updateProduct,
} from "../../handlers/products/product.handler.js";
import auth from "../../middleware/auth.middleware.js";
import { productStorage } from "../../db/mcd/misc/mStorage.js";
import mongoose from "mongoose";

const productRouter = express.Router();

const upload = multer({ storage: productStorage });

const isValidObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error(`Invalid ObjectId: ${id}`);
    return false;
  }
  return true;
};

// POST PRODUCT
productRouter.post(
  "/product",
  auth,
  upload.single("file"),
  async (req, res) => {
    try {
      const { title, price } = req.body;

      if (!title || !price) {
        return res.status(400).send({
          status: "error",
          message: "Please provide all required fields",
          data: [],
        });
      }

      const model = { title, price };

      if (req.file) {
        model.image =
          process.env.SERVER_HOST + "/products/" + req.file.filename;
      }

      const result = await addProduct(model);

      if (!result || result.status !== "ok") {
        return res.status(500).send({
          status: "error",
          message: result.message || "Failed to add product",
          data: [],
        });
      }

      return res.status(201).send({ ...result });
    } catch (error) {
      console.error("Error adding product:", error);
      return res.status(500).send({
        status: "error",
        message: "Internal server error",
        error: error.message,
      });
    }
  }
);

// PUT PRODUCT
productRouter.put("/product", auth, upload.single("file"), async (req, res) => {
  try {
    const { id, title, price } = req.body;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Product ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const model = { id, title, price };

    if (req.file) {
      model.image = process.env.SERVER_HOST + "/products/" + req.file.filename;
    }

    const result = await updateProduct(model);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// DELETE PRODUCT
productRouter.delete("/product/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "No ID provided",
        data: {},
      });
    }

    if (!isValidObjectId(id)) return;

    const result = await deleteProduct(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// GET PRODUCT BY ID
productRouter.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Product ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const result = await getProductById(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default productRouter;
