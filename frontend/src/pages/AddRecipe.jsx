import { useEffect, useState } from "react"
import { addRecipe, getCategories,addCategory } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddRecipe(){

        const navigate = useNavigate();

        const [categories, setCategories] = useState([]);
        const [ingredientInput, setIngredientInput] = useState("");
                const [newCategory, setNewCategory] = useState("");
        const [formData, setFormData] = useState({
                title : "",
                ingredient :[],
                category : [],
                description : "",
                imageURL : ""
        })

        useEffect(()=>{
                async function fetchCategories() {
                        const data = await getCategories();
                        setCategories(data)
                        console.log(data);
                        
                        
                }
                fetchCategories();
                console.log(formData);

        },[])

        async function handleSubmit(e){
                e.preventDefault();
                try{
                await addRecipe(formData);
                navigate("/")
                }
                catch(error){
                        console.log(error)
                }
        }

        function handleChange(e){
                setFormData({
                        ...formData,
                        [e.target.name] : e.target.value
                })
        }

        function handleCategorySelect(e){
                const value = e.target.value;
                if(formData.category.includes(value)){
                        setFormData({
                                ...formData,
                                category : formData.category.filter((c)=> c!=value)
                        })
                }
                else{
                        setFormData({
                                ...formData,
                                category : [...formData.category,value]
                        })
                }
                console.log(formData);
                
        }

        function addIngredient(){
                if(!ingredientInput.trim()){
                        return;
                }
                setFormData({
                        ...formData,
                        ingredient : [...formData.ingredient,ingredientInput.trim()]
                })
                
                
                setIngredientInput("")
                console.log(formData);
        }

        function removeIngredient(i){
                setFormData({
                       ...formData ,
                       ingredient : formData.ingredient.filter((_,ind)=>ind!=i)
                })
        }

        async function handleAddCategory(){
                if(!newCategory.trim()) return;
                try{
const added = await addCategory({ name: newCategory.trim() });
                        setCategories(prev => [...prev, added]);  
                        setNewCategory("");
                }
                catch(e){
                        console.log(e);
                }
        }

        return(
                <div>
                        <form onSubmit={handleSubmit}>

                        <label>title</label>
                        <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        />

                        <label>image url</label>
                        <input
                        type="text"
                        name = "imageURL"
                        value={formData.imageURL}
                        onChange={handleChange}
                        />

                        <label>Category</label>
                        <div>
                                {categories.map((cat)=>(
                                        <label key={cat._id} >
                                                <input
                                                type="checkbox"
                                                value={cat._id}
                                                checked={formData.category.includes(cat._id)}
                                                onChange={handleCategorySelect}
                                                />{cat.name}
                                        </label>
                                ))}
                        </div>
                        <div style={{ marginTop: "8px" }}>
                                        <input
                                        type="text"
                                        placeholder="Add new category"
                                        value={newCategory}
                                        onChange={e => setNewCategory(e.target.value)}
                                        />
                                        <button type="button" onClick={handleAddCategory}>Add Category</button>
                                </div>
                        <label>ingredients</label>
                        <input
                        type="text"
                        value={ingredientInput}
                        onChange={(e)=>setIngredientInput(e.target.value)}
                        />
                        <button
                        type="button"
                         onClick={addIngredient}>add</button>
                        <ul>
                                {formData.ingredient.map((a,i)=>(
                                       <li key={i}>{a}
                                       <button type="button" onClick={() => removeIngredient(i)}>X</button>
                                       </li> 
                                ))}
                        </ul>

                        <label>description</label>
                        <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        />

                        <button type="submit">submit</button>

                        </form>
                </div>
        )
}