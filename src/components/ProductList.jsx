import { Link, useLocation } from "react-router-dom";
import css from "../components/ProductList.module.css";

const ProductList = ({ products }) => {
const location = useLocation()

  return (
    <ul className={css.list}>
      {/* {location.pathname === '/search' && <h2>Search result</h2>}
      {location.pathname === '/products' && <h2>Product result</h2>} */}
      {Array.isArray(products) &&
        products.map((product) => {
          return (
            <li className={css.item} key={product.id}>
              <img
                width={200}
                height={200}
                src={product.images[0]} // Первое изображение из массива
                alt={product.title}
              />
              <h2>{product.title}</h2>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Rating:</strong> {product.rating}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <Link state={location} to={`/products/${product.id}`}>See the details product</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default ProductList;
