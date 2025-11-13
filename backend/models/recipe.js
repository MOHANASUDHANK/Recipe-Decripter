import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  category: [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "category"
    }
  ],
  instructions: String
});

export default mongoose.model("recipe", recipeSchema);
