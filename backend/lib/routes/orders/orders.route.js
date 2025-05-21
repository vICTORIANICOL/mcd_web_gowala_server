import express from "express";
import { getOrders } from "../../handlers/orders/orders.handler.js";

const ordersRouter = express.Router();

// Get orders
ordersRouter.get("/orders", async (req, res) => {
  try {
    const data = await getOrders();

    if (data.status === "ok") {
      return res.status(200).send({ message: data.message, data: data.data });
    }

    return res.status(500).send({ message: data.message, data: [] });
  } catch (error) {
    console.error("Error in GET /orders:", error);
    return res.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default ordersRouter;
