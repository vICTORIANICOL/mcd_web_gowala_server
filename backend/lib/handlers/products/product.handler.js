import dbConnect from "../../db/dbConnect.js";
import productModel from "../../db/models/product.model.mjs";
import { deleteProductImage } from "../file.handler.js";

// ADD PRODUCT
export const addProduct = async (body) => {
  try {
    await dbConnect();

    if (!body.image) {
      body.image = `${process.env.SERVER_HOST}/products/no-product.jpg`;
    }

    const data = await productModel.create(body);

    return {
      status: "ok",
      message: "Product created successfully",
      data: data,
    };
  } catch (error) {
    console.error("Error adding product:", error);

    return {
      status: "error",
      message: "An error occurred while creating the product",
      data: [],
      error: error.message,
    };
  }
};

// UPDATE PRODUCT
export const updateProduct = async (body) => {
  try {
    await dbConnect();

    const product = await productModel.findById(body.id);
    if (!product) {
      return {
        status: "not_found",
        message: "Product not found",
        data: [],
      };
    }

    if (body.image) {
      await deleteProductImage(product.image);
    }

    const updatedProduct = await productModel.findByIdAndUpdate(body.id, body, {
      new: true,
    });

    return {
      status: "ok",
      message: "Product updated successfully",
      data: updatedProduct,
    };
  } catch (error) {
    console.error("Error updating product:", error);
    return {
      status: "error",
      message: "An error occurred while updating the product",
      data: [],
      error: error.message,
    };
  }
};

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  try {
    await dbConnect();

    const product = await productModel.findById(id);
    if (!product) {
      return {
        status: "not_found",
        message: "Product not found",
        data: [],
      };
    }

    if (product.image) {
      await deleteProductImage(product.image);
    }

    const deletedProduct = await productModel.findByIdAndDelete(id);

    return {
      status: "ok",
      message: "Product deleted successfully",
      data: deletedProduct,
    };
  } catch (error) {
    console.error("Error deleting product:", error);
    return {
      status: "error",
      message: "An error occurred while deleting the product",
      data: [],
      error: error.message,
    };
  }
};

// GET PRODUCT BY ID
export const getProductById = async (id) => {
  try {
    await dbConnect();

    const product = await productModel.findById(id);

    if (!product) {
      return {
        status: "not_found",
        message: "Product not found",
        data: [],
      };
    }

    return {
      status: "ok",
      message: "Product fetched successfully",
      data: product,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      status: "error",
      message: "An error occurred while fetching the product",
      data: [],
      error: error.message,
    };
  }
};
