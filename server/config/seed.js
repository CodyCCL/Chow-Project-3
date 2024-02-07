const db = require('./connection');
const {
  Category,
  Ingredients,
  Macros,
  Meal,
  Order,
  Restaurant,
  Review,
  User,
} = require("../models");
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  //used to drop collections if they currently exist
  //caution will erase all existing data in these collections!!
  await cleanDB("Category", "categories");
  await cleanDB("Ingredients", "ingredients");
  await cleanDB("Macros", "macros");
  await cleanDB("Meal", "meals");
  await cleanDB("Order", "orders");
  await cleanDB("Restaurant", "restaurant");
  await cleanDB("Review", "reviews");
  await cleanDB("User", "users");

  // Our seed source for our data models....

  // Create seed data for lunch and dinner categories
  const lunchCategory = new Category({
    category: "Lunch",
  });

  const dinnerCategory = new Category({
    category: "Dinner",
  });

  const seedData = [lunchCategory, dinnerCategory];

  // Insert seed data for categories
  try {
    await Category.insertMany(seedData);
    console.log("Seed data inserted successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
});