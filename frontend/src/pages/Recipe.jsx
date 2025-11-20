import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getRecipeById } from "../services/api.js";

export default function Recipe(){
        const {id} = useParams();
        const [recipe, setRecipe] = useState([]) 
        
        useEffect(() => {
          async function load() {
                const data = getRecipeById(id);
                setRecipe(data);
          }
        
        load();
        }, [id])
        
        return (
                <div>
                        <img
                        src={recipe.imageURL}
                        alt={recipe.title}
                        />
                        Hello it's working
                </div>
        )
}