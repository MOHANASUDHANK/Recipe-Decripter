import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element = {<Recipe/>}/>
        <Route path="/add-recipe" element = {<AddRecipe/>}/>
      </Routes>
    </BrowserRouter>
  );
}
