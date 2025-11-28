import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/filterForm.css"
import FilterForm from "./FilterForm";

export default function Header({setRecipes}) {
  const navigate = useNavigate();
  const [filterFormOpen, setFilterFormOpen] = useState(false);

  function addrecipe() {
    navigate(`/add-recipe`);
  }

  function handleForm(){
    setFilterFormOpen(false)
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
        //  value={search}
        //onChange={(e) => setSearch(e.target.value)}
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
