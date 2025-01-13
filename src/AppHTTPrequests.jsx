import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
import { requestProducts } from "./services/api.js";
import ProductList from "./components/ProductList.jsx";
import css from './AppHTTPrequests.module.css'
import SearchForm from "./components/SearchForm.jsx";

const AppHTTPrequests = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('')


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

  const searchQuery = (searchTherm) => {
    setQuery(searchTherm)
  }

  return (
    <div>
      <h1 className={css.title}>Super market</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      <SearchForm searchQuery={searchQuery}/>
      <ProductList products={products} />
    </div>
  );
};

export default AppHTTPrequests;
