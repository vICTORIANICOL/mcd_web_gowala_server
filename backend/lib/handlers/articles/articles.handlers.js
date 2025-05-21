import dbConnect from "../../db/dbConnect.js";
import articleModel from "../../db/models/article.model.mjs";

export const getArticles = async () => {
  try {
    await dbConnect();

    const articles = await articleModel.find({});

    return {
      status: "ok",
      message: "Articles fetched successfully",
      data: articles,
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      status: "error",
      message: "An error occurred while fetching articles",
      data: [],
      error: error.message,
    };
  }
};
