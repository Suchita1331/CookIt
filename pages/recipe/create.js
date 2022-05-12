import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/create.module.css";

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [procedure, setProcedure] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      ingredients,
      time,
      procedure,
    };
    try {
      const res = await axios.post("/api/recipe/create", data);
      if (res.status == 200) {
        router.push(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit}>
        <h2>Add Recipe..</h2>
        <input
          placeholder="Enter Recipe Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Enter Recipe Ingredients"
          type="text"
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <input
          placeholder="Enter Recipe Cooking Time"
          type="time"
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter Recipe Procedure"
          type="text"
          onChange={(e) => setProcedure(e.target.value)}
          required
        />
        <div>
          <button className={styles.submit}>
            <a>Create Recipe</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
