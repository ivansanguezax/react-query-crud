import axios from "axios";

const productsAPI = axios.create({
    baseURL: "http://localhost:3000"
});

export const getProducts = async () => {
    const response = await productsAPI.get("/products");
    return response.data;
} 