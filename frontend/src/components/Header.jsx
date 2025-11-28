import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/filterForm.css"
import FilterForm from "./FilterForm";
import { getRecipes } from "../services/api";

export default function Header({setRecipes}) {
  const navigate = useNavigate();
  const [filterFormOpen, setFilterFormOpen] = useState(false);

  function addrecipe() {
    navigate(`/add-recipe`);
  }

  function handleForm(){
    setFilterFormOpen(false)
  }
  function handleSearch(text) {
  const query = text.toLowerCase();

  setRecipes((prev) =>
    prev.filter((recipe) =>
      recipe.title.toLowerCase().includes(query)
    )
  );

  if (text.trim() === "") {
    getRecipes().then((data) => setRecipes(data));
  }
}

  return (
    <div className="top-panel">
      <button className="add-btn" onClick={addrecipe}>
        + Add Recipe
      </button>

      <input
  type="text"
  className="search-box"
  placeholder="Search recipes..."
  onChange={(e) => handleSearch(e.target.value)}
/>


      <button type="buttom" onClick={() => setFilterFormOpen(true)}>
        Filter
      </button>
      {filterFormOpen && (
        <FilterForm
        setFilterFormOpen = {setFilterFormOpen}
        setRecipes = {setRecipes}
        />
      )}
    </div>
  );
}
