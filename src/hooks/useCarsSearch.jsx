import axios from "axios";
import { useEffect, useState } from "react";

export const useCarsSearch = () => {
  const [cars, setCars] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('')

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

  useEffect(() => {
    if (query === 0) return
      
    
    async function fetchAndFilterCars() {
      setIsLoading(true);
      try {
        const response = await axios.get("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
        console.log(response.data); 
        const filteredCars = response.data.items.filter(car =>
          car.name.toLowerCase().includes(query.toLowerCase()) ||
          car.location.toLowerCase().includes(query.toLowerCase()) 
        );
        setCars(filteredCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAndFilterCars();
  }, [query]);

  const searchQuery = (searchTherm) => {
    setQuery(searchTherm);
  };

  return {cars, isLoading, isError, searchQuery}
}

