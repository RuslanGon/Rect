import axios from "axios";

export const requestCarts = async () => {
  const { data } = await axios.get("https://dummyjson.com/carts");
  return data;
};

export const requestCartsByQuery = async (query = '') => {
    const { data } = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    return data;
  };


