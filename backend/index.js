import express from "express";
import mongoose from "mongoose";
import recipe from "./models/recipe.js";
 
const app = express();

app.get("/",(req,res)=>{
        res.send("server is running")
})

mongoose.connect(
'mongodb://localhost:27017')
.then(async ()=>{
        console.log('connected to db')
        const pasta = new recipe({
  title: "cream",
  ingredients: ["pasta", "milk", "cheese"],
  instructions: "Boil pasta, mix sauce, and serve hot.",
  category: ["Main Course"]
});

 pasta.save();
})
.catch(err=>console.log(err)
)


app.listen(5000,()=>console.log('server is running port 5000'));
