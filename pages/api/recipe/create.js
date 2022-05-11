import { PrismaClient } from "@prisma/client";

const createRecipeRoute = async (req, res) => {
  const prisma = new PrismaClient();
  if (req.method == "POST") {
    const { name, ingredients, time, procedure } = await req.body;
    try {
      const newRecipe = await prisma.recipe.create({
        data: {
          name: name,
          ingredients: ingredients,
          cookingTime: time,
          procedure: procedure,
        },
      });
      res.json(newRecipe.id);
      res.status(200).end();
    } catch (error) {
      res.status(500).end();
    }
  }
  res.status(405).end();
};

export default createRecipeRoute;
