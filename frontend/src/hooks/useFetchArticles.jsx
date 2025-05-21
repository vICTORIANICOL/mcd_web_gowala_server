import { useState, useEffect } from "react";

export const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [articleError, setArticleError] = useState(null);
  const [articleIsLoading, setArticleIsLoading] = useState(false);

  // Fetch all articles
  const fetchArticles = async () => {
    setArticleIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/articles");
      const data = await response.json();
      console.log(data);
      setArticles(data.data);
      return data.data;
    } catch (err) {
      setArticleError("Something went wrong fetching articles");
      console.error(err);
    } finally {
      setArticleIsLoading(false);
    }
  };

  // Create new article
  const createArticle = async (articleData) => {
    setArticleIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/article", {
        method: "POST",
        body: articleData,
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    } finally {
      setArticleIsLoading(false);
    }
  };

  // Update article
  const updateArticle = async (articleData) => {
    try {
      const response = await fetch(`http://localhost:3042/article`, {
        method: "PUT",
        body: articleData,
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  // Delete article
  const deleteArticle = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/article/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Get article by ID
  const fetchArticleById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/article/${id}`);
      const data = await response.json();
      return data.data;
    } catch (err) {
      console.error(err);
    }
  };

  // Initial fetch on load
  useEffect(() => {
    fetchArticles();
  }, []);

  return {
    articles,
    fetchArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    fetchArticleById,
    articleError,
    articleIsLoading,
  };
};
