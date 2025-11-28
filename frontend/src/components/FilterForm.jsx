import { useEffect, useState } from "react";
import { getCategories, getRecipesByFilter } from "../services/api.js";
import "../css/filterForm.css";

export default function FilterForm({ setFilterFormOpen, setRecipes }) {
    const [categories, setCategories] = useState([]);
    const [selectedCat, setSelectedCat] = useState([]);
    const [selectedMode, setSelectedMode] = useState("");
    const modes = ["and", "or"];

    useEffect(() => {
        async function load() {
            const data = await getCategories();
            setCategories(data);
        }
        load();
    }, []);

    function handleChange(e) {
        const id = e.target.value;
        if (selectedCat.includes(id)) {
            setSelectedCat(selectedCat.filter((cat) => cat != id));

            console.log("hi");
        } else {
            setSelectedCat([...selectedCat, id]);
            console.log("hello");
        }
        console.log(selectedCat);
    }

    function handleChangeMode(e) {
        setSelectedMode(e.target.value);
    }

    async function handleSubmit(e) {
        e.prevantDefault;
        setFilterFormOpen(false);
        const data = await getRecipesByFilter(selectedCat,selectedMode)
        setRecipes(data)
    }

    return (
        <>
            <div className="popup-overlay">
                <form className="popup-box" onSubmit={handleSubmit}>
                    <label>categries</label>
                    <div>
                        <ul>
                            {categories.map((cat) => (
                                <div key={cat._id}>
                                    <input
                                        type="checkbox"
                                        value={cat._id}
                                        checked={selectedCat.includes(cat._id)}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {cat.name}
                                </div>
                            ))}
                        </ul>
                        <label>mode</label>
                        <div>
                            {modes.map((mode) => (
                                <label key={mode}>
                                    <input
                                        type="radio"
                                        value={mode}
                                        checked={mode == selectedMode}
                                        onChange={handleChangeMode}
                                    />
                                    {mode}
                                </label>
                            ))}
                        </div>
                    </div>
                    <button type="submit">filter</button>
                </form>
            </div>
        </>
    );
}
