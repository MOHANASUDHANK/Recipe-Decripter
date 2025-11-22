import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element = {<Recipe/>}/>
        <Route path="/edit-recipe/:id" element ={<EditRecipe/>}/>
        <Route path="/add-recipe" element = {<AddRecipe/>}/>
      </Routes>
    </BrowserRouter>
  );
}
