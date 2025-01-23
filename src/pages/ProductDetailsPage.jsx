import { Suspense, lazy, useEffect, useRef} from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
// import { requestProductDetailsById } from "../services/api.js";
import css from './ProductDetailsPage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { apiRequestProductDetailsById } from "../redux/productDetails/operations.js";
const CommentPage = lazy(() => import("./CommentPage.jsx"));
const ReviewsPage = lazy(() => import("./ReviewsPage.jsx"));

const ProductDetailsPage = () => {
    const {productId} = useParams()
    // const [productDetails, setProductDetails] = useState(null)
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);
    const dispaatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails.productDetails)
    const isLoading = useSelector(state => state.productDetails.isLoading)
    const isError = useSelector(state => state.productDetails.isError)

    const location = useLocation()
    const backRefLink = useRef(location.state ?? '/products')

    useEffect(() => {
      dispaatch(apiRequestProductDetailsById(productId))
    }, [dispaatch, productId])

    // useEffect(() => {
    //     async function fetchProductDetails() {
    //       setIsLoading(true);
    //       try {
    //         const data = await requestProductDetailsById(productId) ;
    //         setProductDetails(data)
    //       } catch (error) {
    //         console.error("Error fetching products:", error);
    //         setIsError(true);
    //       } finally {
    //         setIsLoading(false);
    //       }
    //     }
    //     fetchProductDetails();
    //   }, [productId]);

  return (
    <div>
      <h1 className={css.title}>Product details</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
     {productDetails !== null && <div className={css.div}>
     <Link to={backRefLink.current}>Go back</Link>
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
              <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/comments" element={<CommentPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
              </Routes>
              </Suspense>
      </div>}
    
    </div>
  );
};

export default ProductDetailsPage;
