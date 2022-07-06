import { PrismaClient } from "@prisma/client";
import Link from "next/link";
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
      <Link href="/recipe" className={styles.back}>
        <a>
          <span>{"<"} Back</span>
        </a>
      </Link>
      <section className={styles.menu}>
        <h1>{recipe.name}</h1>
        <div>
          <strong>Cooking Time : </strong>
          <span>( In minutes )</span>
           {recipe.cookingTime}
        </div>
        <div>
          <strong>Ingredients : </strong>
          {recipe.ingredients}
        </div>
        <div>
            <strong>
              Procedure :<br />
            </strong>
            {recipe.procedure}
        </div>
      </section>
    </>
  );
};

export default RecipePage;
