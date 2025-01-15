import { Link } from "react-router-dom";
import css from "../components/ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <ul className={css.list}>
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
              <h2>Title: {product.title}</h2>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Rating:</strong> {product.rating}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Discount:</strong> {product.discountPercentage}%</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Stock:</strong> {product.stock} items</p>
              <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
              <p><strong>Weight:</strong> {product.weight} kg</p>
              <p><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
              <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
              <p><strong>Shipping Info:</strong> {product.shippingInformation}</p>
              <p><strong>Availability:</strong> {product.availabilityStatus}</p>
              <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
              <p><strong>Minimum Order:</strong> {product.minimumOrderQuantity}</p>
              <Link to={`/products/${product.id}`}>See the details product</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default ProductList;
