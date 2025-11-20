import axios from "axios";

const API = axios.create({
        baseURL: "http://localhost:5000"
});





export const getRecipes = async () => {
        const res = await API.get("/recipes");
        return res.data;
};

export const getRecipeById = async (id) => {
        const res = await API.get(`/recipes/${id}`);
        return res.data;
};

export const getRecipesByFilter = async (categories, mode) => {
        const res = await API.post("/recipes/filter", { categories, mode });
        return res.data;
};

export const addRecipe = async (data) => {
        const res = await API.post("/recipes", data);
        return res.data;
};

export const updateRecipe = async (id, data) => {
        const res = await API.put(`/recipes/${id}`, data);
        return res.data;
};

export const deleteRecipe = async (id) => {
        const res = await API.delete(`/recipes/${id}`);
        return res.data;
};




export const getCategories = async () => {
        const res = await API.get("/category");
        return res.data;
};

export const addCategory = async (data) => {
        const res = await API.post("/category", data);
        return res.data;
};

export const deleteCategory = async (id) => {
        const res = await API.delete(`/category/${id}`);
        return res.data;
};

export default API;
