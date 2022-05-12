import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../../styles/recipe.module.css";

const RecipiesPage = () => {
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");

  const fetchRecipe = async () => {
    const res = await axios.get("/api/recipe", {
      params: {
        q: query,
      },
    });
    setRecipe(res.data);
  };

  useEffect(() => {
    fetchRecipe();
  }, [query]);

  const { user } = useUser();

  return (
    <>
      <div className={styles.hole}>
        <div class="section">
          <div className={styles.navbar}>
            <nav>
              <div class="logo">
                <img src="/logo1.png" />
              </div>
              <ul>
                <li>
                  <a href="/" class="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/aboutus" class="nav-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contactus" class="nav-link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/recipe" class="nav-link">
                    Recipe
                  </a>
                </li>
                <li>
                  {user && (
                    <a href="/api/auth/logout" class="nav-link">
                      Logout{" "}
                    </a>
                  )}{" "}
                  {!user && (
                    <a href="/api/auth/login" class="nav-link">
                      Login
                    </a>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.Search}>
          <input
            type="search"
            placeholder="Search via ingredients"
            className={styles.bar}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input type="submit" value="Search" className={styles.submit} />
        </div>
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
      </div>
    </>
  );
};

export default RecipiesPage;
