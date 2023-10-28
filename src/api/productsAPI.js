import axios from "axios";

const productsAPI = axios.create({
    baseURL: "http://localhost:3000/products"
});

export const getProducts = async () => {
    const response = await productsAPI.get("/");
    return response.data;
} 

export const createProduct = async (product) => productsAPI.post("/", product);

export const deleteProduct = async (id) => productsAPI.delete(`/${id}`);