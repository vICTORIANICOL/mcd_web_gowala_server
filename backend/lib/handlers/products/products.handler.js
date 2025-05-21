import dbConnect from "../../db/dbConnect.js";
import productModel from "../../db/models/product.model.mjs";

export const getProducts = async () => {
  try {
    await dbConnect();

    const products = await productModel.find({});

    return {
      status: "ok",
      message: "Products fetched successfully",
      data: products,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      status: "error",
      message: "An error occurred while fetching products",
      data: [],
      error: error.message,
    };
  }
};
