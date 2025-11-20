import { useNavigate } from "react-router-dom";
import "../css/recipeCard.css"

export default function Card({recipe}) {
        
        const  navigate = useNavigate();

        function handleClick() {
                navigate(`/recipe/${recipe._id}`)
        }

        return (
                <div
                className="recipe-card"
                onClick={handleClick}
                style={{cursor : "pointer"}}
                >
                        <img
                        src={recipe.imageURL} 
                        alt={recipe.title}
                        className="recipe-image"
                        />

                        <h3 className="recipe-title">{recipe.title}</h3>
                </div>
        )
}