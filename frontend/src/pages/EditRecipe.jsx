import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import { getCategories, getRecipeById, updateRecipe } from "../services/api";

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ingredientInput, setIngredientInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    ingredient: [],
    category: [],
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    async function fetch() {
      const formData = await getRecipeById(id);
      const catData = await getCategories();
      setFormData(formData);
      setCategories(catData);
    }
    fetch();
  }, [id]);
  console.log(formData, categories);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleCategoryChange(id){
        if(formData.category.includes(id)){
                setFormData({
                        ...formData,
                        category : formData.category.filter((i)=>i!=id)
                })
        }
        else{
                setFormData({
                        ...formData,
                        category : [...formData.category,id]
                })
        }
  }
  function addIngredient(){
        if(!ingredientInput.trim())
                return;
        setFormData({
                ...formData,
                ingredient : [...formData.ingredient,ingredientInput.trim()]
        })
        setIngredientInput("")
  }

  function removeIngredient(i){
        setFormData({
                ...formData,
                ingredient : formData.ingredient.filter((_,ind)=>i!=ind)
        })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateRecipe(id, formData);
    navigate(`/recipe/${id}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <img src={formData.imageURL} alt={formData.title} />
        <label>Image URL</label>
        <input
          type="text"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
        />

        <label>Category</label>
        <div>
          {categories.map((cat) => (
            <label key={cat._id}>
              <input
              type="checkbox"
              checked={formData.category.includes(cat._id)} 
              onChange={()=>handleCategoryChange(cat._id)}
              />{cat.name}
            </label>
          ))}
        </div>

        <label>Ingredient</label>
        <div>
                <input 
                type="text"
                value={ingredientInput}
                onChange={(e)=>setIngredientInput(e.target.value)}
                />
                <button type="button" onClick={addIngredient}>add </button>
                {
                        formData.ingredient.map((val,ind)=>(
                                <div key={ind}>{val}
                                <button type="button" onClick={()=>removeIngredient(ind)}>delete</button></div>
                        ))
                }
        </div>

        <label>description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
}
