import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";

const AppHTTPrequests = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true); 
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
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
      <h1>Super market</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul>
        {Array.isArray(products) &&
          products.map((product) => {
            return (
              <li key={product.id}>
                <img
                  width={200}
                  height={200}
                  src={product.images}
                  alt={product.title}
                />
                <h2>Title:{product.title}</h2>
                <p>Brand: {product.brand}</p>
                <p>Rating: {product.rating}</p>
                <h3>Price: {product.price}</h3>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AppHTTPrequests;
