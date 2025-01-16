import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com/'
})

export const requestProducts = async () => {
    const { data } = await instance.get("/products");
    return data
}

export const requestProductsByQuery = async (query = '') => {
    const { data } = await instance.get(`/products/search?q=${query}`);
    return data
}

export const requestProductDetailsById = async (productId) => {
    const { data } = await instance.get(`/products/${productId}`);
    return data
}

export const requestCarsDetailsById = async (carId) => {
    const { data } = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${carId}`);
    return data
}
