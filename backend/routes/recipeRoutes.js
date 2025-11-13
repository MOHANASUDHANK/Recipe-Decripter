import { getAllRecipes, getRecipeById ,getRecipeByFilter } from "../controllers/recipeController.js";
import express from "express";

const router =express.Router();

router.get("/filter",getRecipeByFilter)
router.get("/",getAllRecipes);
router.get("/:id",getRecipeById);

export default router;