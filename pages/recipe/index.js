import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../../styles/recipe.module.css";

const RecipiesPage = () => {
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState();

  const fetchRecipe = async () => {
    const res = await axios.get("/api/recipe");
    console.log(res.data);
    setRecipe(res.data);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
      <input type="search" placeholder="Search Ingredients" />
      <input type="submit" value="Search" />
      <main className={styles.main}>
        {recipe.map((recipe) => (
          <div key={recipe.id} className={styles.recipe}>
            <h1>
              <a href={`/recipe/${recipe.id}`}>{recipe.name}</a>
            </h1>
            <div>
              <strong>Cooking Time : </strong>
              {recipe.cookingTime}
            </div>
            <div>
              <strong>Ingredients : </strong>
              {recipe.ingredients}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default RecipiesPage;
