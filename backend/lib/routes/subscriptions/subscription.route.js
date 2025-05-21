import express from "express";
import auth from "../../middleware/auth.middleware.js";
import {
  addSubscription,
  deleteSubscription,
  updateSubscription,
} from "../../handlers/subscriptions/subscription.handler.js";
import mongoose from "mongoose";

const subscriptionRoute = express.Router();

const isValidObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error(`Invalid ObjectId: ${id}`);
    return false;
  }
  return true;
};

// POST SUBSCRIPTION
subscriptionRoute.post("/subscription", auth, async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({
        status: "error",
        message: "Subscription email is required",
        data: [],
      });
    }

    const model = { ...req.body };

    const result = await addSubscription(model);

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(201).send(result);
  } catch (error) {
    console.error("Error in POST /subscription:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// PUT SUBSCRIPTION
subscriptionRoute.put("/subscription", auth, async (req, res) => {
  try {
    const { id, email } = req.body;

    if (!id || !email) {
      return res.status(400).send({
        status: "error",
        message: "Subscription ID and email are required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const model = { ...req.body };

    const result = await updateSubscription(model);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error updating subscription:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// DELETE -> ID
subscriptionRoute.delete("/subscription/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Subscription ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const result = await deleteSubscription(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error deleting subscription:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default subscriptionRoute;
