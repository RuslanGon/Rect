import axios from "axios";
import { useEffect, useState } from "react";
import css from './HTTP.module.css'
import Loader from "./components/Loader.jsx";

const AppHTTPrequests = () => {
  const [carts, setCarts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchCarts() {
      try {
        setIsLoading(true)
        const { data } = await axios.get("https://dummyjson.com/carts");
        console.log(data);
        setCarts(data.carts);
      } catch (error) {
        console.error("Error fetching carts:", error);
      } finally {
        setIsLoading(false)
      }
    }
    fetchCarts();
  }, []);

  return (
    <div className={css.div}>
      <h1 className={css.title}>Cars from USA</h1>
      {isLoading && <Loader />}
      <ul >
        {carts.map((cart) => (
          <li key={cart.id}>
            <ul className={css.list}>
              {cart.products.map((product) => (
                <li key={product.id}>
                  <h3>Title: {product.title}</h3>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <h4>Total: ${product.total}</h4>
                  <p>Discount: {product.discountPercentage}%</p>
                  <p>Discounted Total: ${product.discountedTotal}</p>
                  <img src={product.thumbnail} alt={product.title} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppHTTPrequests;
