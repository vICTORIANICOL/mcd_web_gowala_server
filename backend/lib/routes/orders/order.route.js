import express from "express";
import auth from "../../middleware/auth.middleware.js";
import {
  addOrder,
  deleteOrder,
  getOrderById,
  updateOrder,
} from "../../handlers/orders/order.handler.js";
import mongoose from "mongoose";

const orderRoute = express.Router();

const isValidObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error(`Invalid ObjectId: ${id}`);
    return false;
  }
  return true;
};

// POST ORDER
orderRoute.post("/order", auth, async (req, res) => {
  try {
    const { email, items } = req.body;

    if (!email || !items) {
      return res.status(400).send({
        status: "error",
        message: "Order email is required",
        data: [],
      });
    }

    const model = { ...req.body };

    const result = await addOrder(model);

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(201).send(result);
  } catch (error) {
    console.error("Error in POST /order:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// PUT ORDER
orderRoute.put("/order", auth, async (req, res) => {
  try {
    const { id, email, items } = req.body;

    if (!id || !email || !items) {
      return res.status(400).send({
        status: "error",
        message: "Order ID, email and items are required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const model = { ...req.body };

    const result = await updateOrder(model);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error updating order:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// DELETE -> ID
orderRoute.delete("/order/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Order ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const result = await deleteOrder(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error deleting order:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// GET ORDER BY ID
orderRoute.get("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Order ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const result = await getOrderById(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching order:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default orderRoute;
