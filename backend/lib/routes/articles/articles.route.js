import express from "express";
import { getArticles } from "../../handlers/articles/articles.handlers.js";

const articlesRouter = express.Router();

// Get articles
articlesRouter.get("/articles", async (req, res) => {
  try {
    const data = await getArticles();

    if (data.status === "ok") {
      return res.status(200).send({ message: data.message, data: data.data });
    }

    return res.status(500).send({ message: data.message, data: [] });
  } catch (error) {
    console.error("Error in GET /articles:", error);
    return res.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default articlesRouter;
