import axios from "axios";

export const requestCarts = async () => {
  const { data } = await axios.get("https://dummyjson.com/carts");
  return data;
};
