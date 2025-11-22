import { getAllRecipes, getRecipeById ,getRecipeByFilter, addRecipe, deleteRecipe, updateRecipe} from "../controllers/recipeController.js";
import express from "express";

const router =express.Router();

router.post("/filter",getRecipeByFilter)//*
router.get("/",getAllRecipes);//*
router.get("/:id",getRecipeById);
router.delete("/:id",deleteRecipe)
router.put("/:id",updateRecipe);
router.post("/",addRecipe);


export default router;