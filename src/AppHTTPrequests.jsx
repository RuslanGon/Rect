import axios from "axios";
import { useEffect, useState } from "react";
import css from './HTTP.module.css'
import Loader from "./components/Loader.jsx";
import CartList from "./components/CartList.jsx";

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
      <CartList carts={carts} />
    </div>
  );
};

export default AppHTTPrequests;
