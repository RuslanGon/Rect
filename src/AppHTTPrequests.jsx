import axios from "axios";
import { useEffect, useState } from "react";
import css from './HTTP.module.css'
import Loader from "./components/Loader.jsx";
import CartList from "./components/CartList.jsx";
import Error from "./components/Error.jsx";
import SearchForm from "./components/SearchForm.jsx";
import { requestCarts } from "./services/api.js";

const AppHTTPrequests = () => {
  const [carts, setCarts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState('')
  console.log(query);

  useEffect(() => {
    async function fetchCarts() {
      try {
        setIsLoading(true)
        const  data  = await requestCarts();
        // console.log(data);
        setCarts(data.carts);
      } catch (error) {
        console.error("Error fetching carts:", error);
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCarts();
  }, []);


  useEffect(() => {
if(query.length === 0) return
async function fetchCartsByQuery() {
  try {
    setIsLoading(true)
    const { data } = await axios.get("https://dummyjson.com/carts");
    setCarts(data.carts);
  } catch (error) {
    console.error("Error fetching carts:", error);
    setIsError(true)
  } finally {
    setIsLoading(false)
  }
}
fetchCartsByQuery();
  }, [query])

  const searchQuery = (searchTherm) => {
setQuery(searchTherm)
  }

  return (
    <div className={css.div}>
      <h1 className={css.title}>Cars from USA</h1>
      <SearchForm searchQuery={searchQuery} />
      {isLoading && <Loader />}
      {isError && <Error /> }
      <CartList carts={carts} />
    </div>
  );
};

export default AppHTTPrequests;
