import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
// import css from './ProductDetailsPage.module.css'
import { useParams } from "react-router-dom";


const ReviewPage = () => {
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

      {isLoading && <Loader />}
      {isError && <Error />}
      {carsDetails !== null && (
        <div>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
