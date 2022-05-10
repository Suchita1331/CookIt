import { PrismaClient } from "@prisma/client";
import styles from "../../styles/recipe.module.css";

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const recipes = await prisma.recipe.findMany();
  const paths = recipes.map((recipe) => ({
    params: {
      slug: recipe.id,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const rawRecipe = await prisma.recipe.findUnique({
    where: {
      id: params.slug,
    },
  });
  return {
    props: {
      recipe: JSON.parse(JSON.stringify(rawRecipe)),
    },
  };
}

const RecipePage = ({ recipe }) => {
  return (
    <>
      <a href="/recipe" className={styles.back}>
        {"<"} back
      </a>

      <h1>{recipe.name}</h1>
      <div>
        <strong>Cooking Time : </strong>
        {recipe.cookingTime}
      </div>
      <div>
        <strong>Ingredients : </strong>
        {recipe.ingredients}
      </div>
      <div>
        <strong>Procedure : </strong>
        {recipe.procedure}
      </div>
    </>
  );
};

export default RecipePage;
