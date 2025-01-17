import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useCarsSearch = () => {
  const [cars, setCars] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  // Первый useEffect: загрузка всех автомобилей
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

  // Второй useEffect: фильтрация автомобилей на основе query
  useEffect(() => {
    if (!query) return; // Если query пустое, выход

    async function fetchAndFilterCars() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );

        const filteredCars = response.data.items.filter((car) => {
          const carName = car.name || ""; // Подстраховка на случай, если name отсутствует
          const carLocation = car.location || ""; // Подстраховка для location
          return (
            carName.toLowerCase().includes(query.toLowerCase()) ||
            carLocation.toLowerCase().includes(query.toLowerCase())
          );
        });

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

  // Функция для обновления параметра поиска
  const searchQuery = (searchTerm) => {
    setSearchParams({ query: searchTerm });
  };

  return { cars, isLoading, isError, searchQuery };
};
