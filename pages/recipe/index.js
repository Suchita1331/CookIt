import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
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
        <div>
          <div className={styles.navbar}>
            <nav>
              <div>
                <Image src="/logo1.png" alt="logo" />
              </div>
              <ul>
                <li>
                  <Link href="/">
                    <a>
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus">
                    <a>
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contactus">
                    <a>
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/recipe">
                    <a>
                      Recipe
                    </a>
                  </Link>
                </li>
                <li>
                  {user && (
                   <Link href="/api/auth/logout">
                    <a>
                      Logout{" "}
                    </a>
                   </Link>
                  )}{" "}
                  {!user && (
                    <Link href="/api/auth/login">
                      <a>
                        Login
                      </a>
                    </Link>
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
