const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      {
        name: "IT & Software",
        subCategories: [
          { name: "Web Development" },
          { name: "Data Science" },
          { name: "Cybersecurity" },
          { name: "Others" },
        ],
      },
      {
        name: "Business",
        subCategories: [
          { name: "E-Commerce" },
          { name: "Marketing" },
          { name: "Finance" },
          { name: "Others" },
        ],
      },
      {
        name: "Design",
        subCategories: [
          { name: "Graphic Design" },
          { name: "3D & Animation" },
          { name: "Interior Design" },
          { name: "Others" },
        ],
      },
      {
        name: "Health",
        subCategories: [
          { name: "Fitness" },
          { name: "Yoga" },
          { name: "Nutrition" },
          { name: "Others" },
        ],
      },
    ];

    // Sequentially create each category with its subcategories
    for (const category of categories) {
      const existingCategory = await database.category.findUnique({
        where: { name: category.name },
      });

      if (!existingCategory) {
        await database.category.create({
          data: {
            name: category.name,
            subCategories: {
              create: category.subCategories,
            },
          },
        });
        console.log(`Created category "${category.name}" with subcategories.`);
      } else {
        console.log(`Category "${category.name}" already exists. Skipping creation.`);
      }
    }

    const levels = ["Beginner", "Intermediate", "Expert", "All levels"];

    for (const level of levels) {
      const existingLevel = await database.level.findUnique({
        where: { name: level },
      });

      if (!existingLevel) {
        await database.level.create({
          data: { name: level },
        });
        console.log(`Created level "${level}".`);
      } else {
        console.log(`Level "${level}" already exists. Skipping creation.`);
      }
    }

    console.log("Seeding successfully");
  } catch (error) {
    console.log("Seeding failed", error);
  } finally {
    await database.$disconnect();
  }
}

main();
