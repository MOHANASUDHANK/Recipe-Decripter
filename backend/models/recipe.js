import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredient: [String],
  category: [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "category"
    }
  ],
  description: String,
  imageURL :String
});

export default mongoose.model("recipe", recipeSchema);
