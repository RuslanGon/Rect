
import { Suspense, lazy, useEffect, useRef } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import css from "./ProductDetailsPage.module.css";
import { apiRequestCarDetailsById } from "../redux/cars/operations.js";

const ReviewPage = lazy(() => import("./ReviewPage.jsx"));

const CarsDetailsPage = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();

  const carsDetails = useSelector(state => state.cars.carsDetails)
  const isLoading = useSelector(state => state.cars.isLoading)
  const isError = useSelector(state => state.cars.isError)

  const location = useLocation();
  const backRefLink = useRef(location.state ?? "/cars");

  useEffect(() => {
    dispatch(apiRequestCarDetailsById(carId))
  }, [dispatch, carId])

  return (
    <div>
      <h1 className={css.title}>Car Details</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      {carsDetails && (
        <div className={css.div}>
          <Link to={backRefLink.current}>Go back</Link>
          <img
            src={carsDetails.gallery?.[0]?.original || "placeholder.jpg"}
            alt={`Car ${carsDetails.name}`}
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <h2>{carsDetails.name}</h2>
          <p><strong>Price:</strong> ${carsDetails.price}</p>
          <p><strong>Location:</strong> {carsDetails.location}</p>
          <p><strong>Description:</strong> {carsDetails.description}</p>
          <p><strong>Form:</strong> {carsDetails.form}</p>
          <p><strong>Length:</strong> {carsDetails.length}</p>
          <p><strong>Width:</strong> {carsDetails.width}</p>
          <p><strong>Height:</strong> {carsDetails.height}</p>
          <p><strong>Tank Capacity:</strong> {carsDetails.tank}</p>
          <p><strong>Consumption:</strong> {carsDetails.consumption}</p>
          <p><strong>Transmission:</strong> {carsDetails.transmission}</p>
          <p><strong>Engine:</strong> {carsDetails.engine}</p>
          <h3>Amenities</h3>
          <ul>
            <li>Air Conditioning: {carsDetails.AC ? "Yes" : "No"}</li>
            <li>Bathroom: {carsDetails.bathroom ? "Yes" : "No"}</li>
            <li>Kitchen: {carsDetails.kitchen ? "Yes" : "No"}</li>
            <li>TV: {carsDetails.TV ? "Yes" : "No"}</li>
            <li>Radio: {carsDetails.radio ? "Yes" : "No"}</li>
            <li>Refrigerator: {carsDetails.refrigerator ? "Yes" : "No"}</li>
            <li>Microwave: {carsDetails.microwave ? "Yes" : "No"}</li>
            <li>Gas: {carsDetails.gas ? "Yes" : "No"}</li>
            <li>Water: {carsDetails.water ? "Yes" : "No"}</li>
          </ul>
          <h3>Gallery</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {carsDetails.gallery?.map((image, index) => (
              <img
                key={index}
                src={image.thumb}
                alt={`Gallery Image ${index + 1}`}
                style={{ width: "100px", height: "100px", borderRadius: "5px" }}
              />
            ))}
          </div>
          <Link to="reviews">Comments</Link>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="reviews" element={<ReviewPage />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default CarsDetailsPage;
