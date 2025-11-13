import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
        name : String,
        icon : String
})

export default mongoose.model("category",categorySchema);