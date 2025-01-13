import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
import { requestProducts } from "./services/api.js";
import ProductList from "./components/ProductList.jsx";
import css from './AppHTTPrequests.module.css'

const AppHTTPrequests = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  return (
    <div>
      <h1 className={css.title}>Super market</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ProductList products={products} />
    </div>
  );
};

export default AppHTTPrequests;
