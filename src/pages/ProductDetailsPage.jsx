import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import { requestProductDetailsById } from "../services/api.js";
import css from './ProductDetailsPage.module.css'
import CommentPage from "./CommentPage.jsx";
import ReviewsPage from "./ReviewsPage.jsx";

const ProductDetailsPage = () => {
    const {productId} = useParams()
    const [productDetails, setProductDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchProductDetails() {
          setIsLoading(true);
          try {
            const data = await requestProductDetailsById(productId) ;
            setProductDetails(data)
          } catch (error) {
            console.error("Error fetching products:", error);
            setIsError(true);
          } finally {
            setIsLoading(false);
          }
        }
        fetchProductDetails();
      }, [productId]);

  return (
    <div>
      <h1 className={css.title}>Product details</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
     {productDetails !== null && <div className={css.div}>
        <img src={productDetails.thumbnail} alt={productDetails.title} />
        <h2>Title: {productDetails.title}</h2>
              <p><strong>Brand:</strong> {productDetails.brand}</p>
              <p><strong>Category:</strong> {productDetails.category}</p>
              <p><strong>Rating:</strong> {productDetails.rating}</p>
              <p><strong>Price:</strong> ${productDetails.price}</p>
              <p><strong>Discount:</strong> {productDetails.discountPercentage}%</p>
              <p><strong>Description:</strong> {productDetails.description}</p>
              <p><strong>Stock:</strong> {productDetails.stock} items</p>
              <p><strong>Tags:</strong> {productDetails.tags.join(", ")}</p>
              <p><strong>Weight:</strong> {productDetails.weight} kg</p>
              <p><strong>Dimensions:</strong> {productDetails.dimensions.width} x {productDetails.dimensions.height} x {productDetails.dimensions.depth} cm</p>
              <p><strong>Warranty:</strong> {productDetails.warrantyInformation}</p>
              <p><strong>Shipping Info:</strong> {productDetails.shippingInformation}</p>
              <p><strong>Availability:</strong> {productDetails.availabilityStatus}</p>
              <p><strong>Return Policy:</strong> {productDetails.returnPolicy}</p>
              <p><strong>Minimum Order:</strong> {productDetails.minimumOrderQuantity}</p>
              <Link to='comments'>Comment</Link>
              <Link to='reviews'>Reviews</Link>
              <Routes>
                <Route path="/comments" element={<CommentPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
              </Routes>
      </div>}
    
    </div>
  );
};

export default ProductDetailsPage;
