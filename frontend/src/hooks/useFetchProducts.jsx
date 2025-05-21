import { useState, useEffect } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [productError, setProductError] = useState(null);
  const [productIsLoading, setProductIsLoading] = useState(false);

  // Get all activities
  const fetchProducts = async () => {
    setProductIsLoading(true);

    try {
      const response = await fetch("http://localhost:3042/products");
      const data = await response.json();
      console.log(data);
      setProducts(data.data);
      return data.data;
    } catch (productError) {
      setProductError("something went wrong", productError);
    } finally {
      setProductIsLoading(false);
    }
  };

  // Create activity
  const createProduct = async (productData) => {
    setProductIsLoading(true);

    try {
      const response = await fetch("http://localhost:3042/product", {
        method: "POST",
        body: productData,
      });

      if (response.status === "productError") {
        throw new Error("productError creating product");
      }

      const result = await response.json();
      return result;
    } catch (productError) {
      console.log(productError);
    } finally {
      setProductIsLoading(false);
    }
  };

  // Refetch
  const productRefetch = () => {
    return fetchProducts();
  };

  //Update activity

  const updateProduct = async (productData) => {
    try {
      const response = await fetch(`http://localhost:3042/product`, {
        method: "PUT",
        body: productData,
      });

      if (response.status === "productError") {
        console.log("productError");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (productError) {
      console.log(productError);
    }
  };

  // Delete activity

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/product/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
    } catch (productError) {
      console.log(productError);
    }
  };

  // Get by ID
  const fetchProductsById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/product/${id}`);
      const data = await response.json();
      return data.data;
    } catch (productError) {
      console.log(productError);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    fetchProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    fetchProductsById,
    productRefetch,
    productError,
    productIsLoading,
  };
};
