import dbConnect from "../../db/dbConnect.js";
import articleModel from "../../db/models/article.model.mjs";
import { deleteArticleImage } from "../file.handler.js";

// ADD ARTICLE
export const addArticle = async (body) => {
  try {
    await dbConnect();

    if (!body.image) {
      body.image = `${process.env.SERVER_HOST}/articles/no-article.jpg`;
    }

    const data = await articleModel.create(body);

    return {
      status: "ok",
      message: "Article created successfully",
      data: data,
    };
  } catch (error) {
    console.error("Error adding article:", error);

    return {
      status: "error",
      message: "An error occurred while creating the article",
      data: [],
      error: error.message,
    };
  }
};

// UPDATE ARTICLE
export const updateArticle = async (body) => {
  try {
    await dbConnect();

    const article = await articleModel.findById(body.id);
    if (!article) {
      return {
        status: "not_found",
        message: "Article not found",
        data: [],
      };
    }

    if (body.image) {
      await deleteArticleImage(article.image);
    }

    const updatedArticle = await articleModel.findByIdAndUpdate(body.id, body, {
      new: true,
    });

    return {
      status: "ok",
      message: "Article updated successfully",
      data: updatedArticle,
    };
  } catch (error) {
    console.error("Error updating article:", error);
    return {
      status: "error",
      message: "An error occurred while updating the article",
      data: [],
      error: error.message,
    };
  }
};

// DELETE ARTICLE
export const deleteArticle = async (id) => {
  try {
    await dbConnect();

    const article = await articleModel.findById(id);
    if (!article) {
      return {
        status: "not_found",
        message: "Article not found",
        data: [],
      };
    }

    if (article.image) {
      await deleteArticleImage(article.image);
    }

    const deletedArticle = await articleModel.findByIdAndDelete(id);

    return {
      status: "ok",
      message: "Article deleted successfully",
      data: deletedArticle,
    };
  } catch (error) {
    console.error("Error deleting article:", error);
    return {
      status: "error",
      message: "An error occurred while deleting the article",
      data: [],
      error: error.message,
    };
  }
};

// GET ARTICLE BY ID
export const getArticleById = async (id) => {
  try {
    await dbConnect();

    const article = await articleModel.findById(id);

    if (!article) {
      return {
        status: "not_found",
        message: "Article not found",
        data: [],
      };
    }

    return {
      status: "ok",
      message: "Article fetched successfully",
      data: article,
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      status: "error",
      message: "An error occurred while fetching the article",
      data: [],
      error: error.message,
    };
  }
};
