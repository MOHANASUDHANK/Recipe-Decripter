import Recipe from "../models/recipe.js";
import Category from "../models/category.js";

export const getAllRecipes = async (req, res) => {
        try {
                const recipes = await Recipe.find().populate("category");
                res.status(200).json(recipes)
        }
        catch (err) {
                res.status(500).json({ message: "Error fetching recipe", error: err.message });
        }
}

export const getRecipeById = async (req, res) => {
        try {
                const { id } = req.params;
                const recipe = await Recipe.findById(id).populate("category");

                if (!recipe) {
                        return res.status(400).json({ message: "id not found" });
                }

                res.status(200).json(recipe)
        }
        catch (err) {
                res.status(500).json({ message: "Error fetching recipe", error: err.message });
        }
}
export const getRecipeByFilter = async (req, res) => {
        try {
                const { categories, mode } = req.body;
                const filter = {};
                if (mode == "and") {
                        filter.category = { $all: categories }
                }
                else {
                        filter.category = { $in: categories }
                }
                const recipe = await Recipe.find(filter).populate("category");

                if (!recipe) {
                        return res.status(404).json({ message: "no recipe found" });
                }

                res.status(200).json(recipe);
        }
        catch (err) {
                res.status(500).json({ message: "Error fetching recipe", error: err.message });
        }
}

export const addRecipe = async (req, res) => {
        try {
                const data = req.body;
                const recipe = new Recipe(data);
                recipe.save();
                console.log(recipe);

                res.status(200).json(recipe);
        } catch (err) {
                res.status(500).json({ message: "error", error: err.message });
        }
}

export const updateRecipe = async (req, res) => {
        try {
                const { id } = req.params;
                const body = req.body;

                const recipe = await Recipe.findByIdAndUpdate(
                        id,
                        body,
                        { new: true, runValidators: true }
                )
                if (!recipe) {
                        return res.status(404).json({ message: "no recipe found" });
                }

                res.status(200).json(recipe);
        }
        catch (err) {
                res.status(500).json({ message: "Error fetching recipe", error: err.message });
        }
}

export const deleteRecipe = async (req, res) => {
        try {
                const { id } = req.params;
                const recipe = await Recipe.findByIdAndDelete(id)
                res.status(200).json(recipe)
        } catch (err) {
                res.status(500).json({ message: "Error fetching recipe", error: err.message });
        }

}