import { useEffect, useState } from "react";
import { getRecipes } from "../services/api";
import Header from "../components/Header.jsx"
import RecipeGrid from "../components/RecipeGrid.jsx";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRecipes();
        setRecipes(data);
        console.log(data)
      } catch (err) {
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div className="home-container">
        <Header setRecipes={setRecipes} />
        <RecipeGrid recipes={recipes}/>
       </div>
  );
}
