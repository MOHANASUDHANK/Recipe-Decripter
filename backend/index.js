import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipeRouters from "./routes/recipeRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());


app.use("/recipes",recipeRouters);
// app.use("/category",categoryRoutes);

mongoose.connect(
'mongodb://localhost:27017')
.then(async ()=>{
        console.log('connected to db')
})
.catch(err=>console.log(err)
)


app.listen(5000,()=>console.log('server is running port 5000'));
