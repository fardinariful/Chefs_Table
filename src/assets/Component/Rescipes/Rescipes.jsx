import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setrecipes] = useState([]);
    
    useEffect(() => {
        fetch('ingrediant.json')
            .then((res) => res.json())
            .then((data) => setrecipes(data))
    }, []);


    return (
        <div className="w-2/3 grid grid-cols-2 gap-y-3"> 
            {
                recipes.map((recipe,idx)=><Recipe key={idx} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;
