import { PrismaClient } from "@prisma/client";

const recipiesRoute = async (req, res) => {
  const prisma = new PrismaClient();
  if (req.method == "GET") {
    const recipies = await prisma.recipe.findMany();
    res.json(recipies);
    res.status(200).end();
  }
  res.status(405).end();
};

export default recipiesRoute;
