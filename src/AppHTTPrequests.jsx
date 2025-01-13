// {
//   "id": 1,
//   "title": "Essence Mascara Lash Princess",
//   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//   "category": "beauty",
//   "price": 9.99,
//   "discountPercentage": 7.17,
//   "rating": 4.94,
//   "stock": 5,
//   "tags": [
//     "beauty",
//     "mascara"
//   ],
//   "brand": "Essence",
//   "sku": "RCH45Q1A",
//   "weight": 2,
//   "dimensions": {
//     "width": 23.17,
//     "height": 14.43,
//     "depth": 28.01

import axios from "axios";
import { useEffect, useState } from "react";

const AppHTTPrequests = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("https://dummyjson.com/products");
      console.log(data);
      setProducts(data.products)
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Super market</h1>
      <ul>
        {Array.isArray(products) && products.map(product => {
          return (<li key={product.id}>
            <img width={200} height={200} src={product.images} alt={product.title} />
            <h2>Title:{product.title}</h2>
            <p>Brand: {product.brand}</p>
            <p>Rating: {product.rating}</p>
            <h3>Price: {product.price}</h3>
          </li>)
        }) }
      </ul>
    </div>
  );
};

export default AppHTTPrequests;
