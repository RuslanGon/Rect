// import axios from "axios";
// import { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import css from "../AppHTTPCars.module.css";
import SearchForm from "../components/SearchForm.jsx";
import { useCarsSearch } from "../hooks/useCarsSearch.jsx";

const CarsPage = () => {

  const {cars, isLoading, isError, searchQuery} = useCarsSearch()

  // const [cars, setCars] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [query, setQuery] = useState('')

  // useEffect(() => {
  //   async function fetchCars() {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(
  //         "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
  //       );
  //       setCars(response.data.items); 
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchCars();
  // }, []);

  // useEffect(() => {
  //   if (query === 0) return
      
    
  //   async function fetchAndFilterCars() {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
  //       console.log(response.data); 
  //       const filteredCars = response.data.items.filter(car =>
  //         car.name.toLowerCase().includes(query.toLowerCase()) ||
  //         car.location.toLowerCase().includes(query.toLowerCase()) 
  //       );
  //       setCars(filteredCars);
  //     } catch (error) {
  //       console.error("Error fetching cars:", error);
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchAndFilterCars();
  // }, [query]);

  // const searchQuery = (searchTherm) => {
  //   setQuery(searchTherm);
  // };

  return (
    <div>
      <h1 className={css.title}>Cars market</h1>
      <SearchForm searchQuery={searchQuery}/>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul className={css.list}>
        {cars && cars.length > 0 ? (
          cars.map((car) => (
            <li className={css.item} key={car.id}>
              <h2 className={css.name}>{car.name}</h2>
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
              {/* <p><strong>Description:</strong> {car.description}</p> */}
              {/* <div>
                <strong>Gallery:</strong>
                <div style={{ display: "flex", gap: "10px" }}>
                  {car.gallery.map((image, index) => (
                    <img key={index} src={image.thumb} alt={`Car ${car.name} - ${index + 1}`}/>
                  ))}
                </div>
              </div> */}
            </li>
          ))
        ) : (
          <p>Loading cars...</p>
        )}
      </ul>
    </div>
  );
};

export default CarsPage;
