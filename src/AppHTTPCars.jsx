import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
import css from "./AppHTTPCars.module.css";

const AppHTTPCars = () => {
  const [cars, setCars] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchCars() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
        setCars(response.data.items); 
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Cars market</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul className={css.list}>
        {cars && cars.length > 0 ? (
          cars.map((car) => (
            <li className={css.item} key={car.id}>
              <h2 className={css.name}>Name: {car.name}</h2>
              <div>
                <img
                  src={car.gallery[0]?.thumb || "placeholder.jpg"}
                  alt={`Car ${car.name}`}
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <p><strong>Rating:</strong> {car.rating}</p>
              <p><strong>Price:</strong> ${car.price}</p>
              <p><strong>Location:</strong> {car.location}</p>
              <p><strong>Description:</strong> {car.description}</p>
              <div>
                <strong>Gallery:</strong>
                <div style={{ display: "flex", gap: "10px" }}>
                  {car.gallery.map((image, index) => (
                    <img key={index} src={image.thumb} alt={`Car ${car.name} - ${index + 1}`}/>
                  ))}
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>Loading cars...</p>
        )}
      </ul>
    </div>
  );
};

export default AppHTTPCars;
