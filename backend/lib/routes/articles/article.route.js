import express from "express";
import multer from "multer";
import {
  addArticle,
  deleteArticle,
  getArticleById,
  updateArticle,
} from "../../handlers/articles/article.handler.js";
import auth from "../../middleware/auth.middleware.js";
import { articleStorage } from "../../db/mcd/misc/mStorage.js";
import mongoose from "mongoose";

const articleRouter = express.Router();

const upload = multer({ storage: articleStorage });

const isValidObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error(`Invalid ObjectId: ${id}`);
    return false;
  }
  return true;
};

// POST ARTICLE
articleRouter.post(
  "/article",
  auth,
  upload.single("file"),
  async (req, res) => {
    try {
      const { title, description, list } = req.body;

      if (!title || !description) {
        return res.status(400).send({
          status: "error",
          message: "Please provide all required fields",
          data: [],
        });
      }

      const model = { title, description, list };

      if (req.file) {
        model.image =
          process.env.SERVER_HOST + "/articles/" + req.file.filename;
      }

      const result = await addArticle(model);

      if (!result || result.status !== "ok") {
        return res.status(500).send({
          status: "error",
          message: result.message || "Failed to add article",
          data: [],
        });
      }

      return res.status(201).send({ ...result });
    } catch (error) {
      console.error("Error adding article:", error);
      return res.status(500).send({
        status: "error",
        message: "Internal server error",
        error: error.message,
      });
    }
  }
);

// PUT ARTICLE
articleRouter.put("/article", auth, upload.single("file"), async (req, res) => {
  try {
    const { id, title, description, list } = req.body;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Article ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const model = { id, title, description, list };

    if (req.file) {
      model.image = process.env.SERVER_HOST + "/articles/" + req.file.filename;
    }

    const result = await updateArticle(model);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error updating article:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// DELETE ARTICLE
articleRouter.delete("/article/:id", auth, async (req, res) => {
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

    const result = await deleteArticle(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error deleting article:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// GET ARTICLE BY ID
articleRouter.get("/article/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Article ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const result = await getArticleById(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching article:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default articleRouter;
