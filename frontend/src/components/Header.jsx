import { useNavigate } from "react-router-dom";
export default function Header() {

        const navigate = useNavigate();

        function addrecipe(){
                navigate(`/add-recipe`)
        }

        return (
          <div className="top-panel">
      
            <button className="add-btn"
            onClick={addrecipe}
            >+ Add Recipe</button>
      
            <input
              type="text"
              className="search-box"
              placeholder="Search recipes..."
            //  value={search}
              //onChange={(e) => setSearch(e.target.value)}
            />
      
            <select className="filter-dropdown">
              <option value="all">All Categories</option>
            </select>
      
          </div>
        );
      }
      