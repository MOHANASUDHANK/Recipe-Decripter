import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  category: [String],
  instructions: String
});

export default mongoose.model("recipe", recipeSchema);
