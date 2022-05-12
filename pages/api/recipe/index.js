import { PrismaClient } from "@prisma/client";

const maxLimit = 50;

const recipiesRoute = async (req, res) => {
  const prisma = new PrismaClient();
  if (req.method == "GET") {
    const searchQuery = req.query.q ?? "";

    // const query = {
    //   where: {
    //     OR:
    //       searchQuery.length > 3
    //         ? [{ ingredients: { contain: searchQuery } }]
    //         : undefined,
    //   },
    // };

    const recipies = await prisma.recipe.findMany({
      where: {
        ingredients: {
          contains: searchQuery,
        },
      },
    });
    res.json(recipies);
    res.status(200).end();
  }
  res.status(405).end();
};

export default recipiesRoute;
