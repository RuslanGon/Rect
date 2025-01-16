import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import css from './ProductDetailsPage.module.css'


const CarsDetailsPage = () => {
  const { carId } = useParams();

  const [carsDetails, setCarsDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchCarsDetails() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${carId}`
        );
        console.log(response.data); // Проверяем структуру ответа
        setCarsDetails(response.data); // Устанавливаем данные напрямую
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCarsDetails();
  }, [carId]);

  return (
    <div>
      <h1 className={css.title}>Car Details</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      {carsDetails !== null && (
        <div className={css.div}>
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
          {/* <h3>Reviews</h3>
          <div>
            {carsDetails.reviews?.map((review, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              >
                <p><strong>{review.reviewer_name}</strong> rated it {review.reviewer_rating} stars</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default CarsDetailsPage;
