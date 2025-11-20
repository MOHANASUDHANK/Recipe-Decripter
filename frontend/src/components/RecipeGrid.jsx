import Card from "./Card"
import "../css/recipeCard.css"

export default function RecipeGrid({recipes}){
        return(
                <div className="recipe-grid">
                        {
                                recipes.map((recipe)=>(
                                        <Card key={recipe._id} recipe={recipe}/>
                                ))
                        }
                </div>
        )
}