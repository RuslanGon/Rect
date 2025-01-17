import { useEffect, useState } from "react";
import { requestProducts, requestProductsByQuery } from "../services/api.js";
import { useSearchParams } from "react-router-dom";

export const useProductSearch = ({isSearchPage = false}) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [query, setQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')

  useEffect(() => {
    if(isSearchPage) return
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
  }, [isSearchPage]);

  useEffect(() => {
    if (query === null) return;
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
    // setQuery(searchTherm);
    setSearchParams({query: searchTherm})
  };

  return { products, isLoading, isError, searchQuery };
};
