import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { deleteRecipe, getRecipeById } from "../services/api.js";


export default function Recipe(){

        const {id} = useParams();
        const navigate = useNavigate();
        const [recipe, setRecipe] = useState({
                title : "",
                ingredient :[],
                category : [],
                description : "",
                imageURL : ""
        })
        
        useEffect(() => {
          async function load() {
                const data =await getRecipeById(id);
                setRecipe(data);
                console.log(data);
          }
        
        load();
        
        },[] )
        
        function handleEdit(){
                navigate(`/edit-recipe/${id}`);
        }

        async function handleDelete(){
                await deleteRecipe(id);
                navigate("/");
        }

        return (
                <div>
                        <img
                        src={recipe.imageURL}
                        alt={recipe.title}
                        />
                        <h1>{recipe.title}</h1>
                        <ul>
                                {recipe.category.map((cat,i)=>(
                                        <li key={i}>{cat.name}</li>
                                ))}
                        </ul>
                        <ul>
                                {recipe.ingredient.map((cat,i)=>(
                                        <li key={i}>{cat}</li>
                                ))}
                        </ul>
                        <p>{recipe.description}</p>
                        <button type="button" onClick={handleEdit}>edit</button>
                        <button type="button" onClick={handleDelete}>delete</button>
                </div>
        )
}