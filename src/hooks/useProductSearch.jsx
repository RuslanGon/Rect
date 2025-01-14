import { useEffect, useState } from "react";
import { requestProducts, requestProductsByQuery } from "../services/api.js";

export const useProductSearch = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const data = await requestProducts();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.length === 0) return;
    async function fetchProductsByQuery() {
      setIsLoading(true);
      try {
        const data = await requestProductsByQuery(query);
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProductsByQuery();
  }, [query]);

  const searchQuery = (searchTherm) => {
    setQuery(searchTherm);
  };

  return { products, isLoading, isError, searchQuery };
};
