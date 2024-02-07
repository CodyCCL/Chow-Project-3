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
  await cleanDB("Meal", "meals");
  await cleanDB("Order", "orders");
  await cleanDB("Restaurant", "restaurant");
  await cleanDB("Review", "reviews");
  await cleanDB("User", "users");

  // Our seed source for our data models....

  // Create seed data for lunch and dinner categories
  const categories = await Category.insertMany([
    { category: 'Lunch' },
    { category: 'Dinner' }
  ])

  const meals = await Meal.insertMany(
    [{
      "name": "Chicken Parmesan",
      "description": "A classic Italian dish with fried chicken breast, marinara sauce, and melted parmesan.",
      "image": "chicken_parmesan.jpg",
      "price": 12.99,
      "quantity": 50,
      "category": categories[0]._id,
      "macros": {
        "protein": 30,
        "carbs": 25,
        "fat": 10,
        "calories": 350
      }
    },
    {
      "name": "Beef and Broccoli",
      "description": "Stir-fried beef with broccoli in a savory sauce.",
      "image": "beef_and_broccoli.jpg",
      "price": 10.99,
      "quantity": 50,
      "category": categories[1]._id,
      "macros": {
        "protein": 25,
        "carbs": 20,
        "fat": 15,
        "calories": 300
      }
    }]
  )
  const users = await User.insertMany([{
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    phone: '555-555-5554',
    password: 'password12345',
  },
  {
    firstName: 'Elijah',
    lastName: 'Holt',
    phone: '555-555-5555',
    email: 'eholt@testmail.com',
    password: 'password12345'
  }
]);
  const reviews = await Review.insertMany([
    { comment: "Great product! Exceeded all my expectations, would buy again!", ratingCount: 5, user: users[0]._id },
    { comment: "Absolutely fantastic! Far better than I expected, quality is top-notch.", ratingCount: 5, user: users[0]._id },
    { comment: "Exceptional quality for the price. A true bargain without compromising on quality.", ratingCount: 5, user: users[0]._id },
    { comment: "Although it arrived late, the product is perfect and customer service was incredibly helpful and accommodating.", ratingCount: 5, user: users[1]._id },
    { comment: "An amazing experience from start to finish, highly recommend! The quality is unbeatable.", ratingCount: 5, user: users[1]._id },
    { comment: "Impressed with the overall quality and service. It’s been a great experience, definitely exceeds expectations.", ratingCount: 5, user: users[1]._id },
  ]);

  const orders = await Order.insertMany([
    { "purchaseDate": "2024-01-18T01:52:14.102579", "totalPrice": 94.97, "totalItems": 5, "meal": [meals[0]._id, meals[1]._id], "user": users[0]._id },
    { "purchaseDate": "2024-01-17T01:52:14.102637", "totalPrice": 16.94, "totalItems": 4, "meal": [meals[0]._id], "user": users[0]._id },
    { "purchaseDate": "2023-12-17T01:52:14.102657", "totalPrice": 26.44, "totalItems": 3, "meal": [meals[0]._id, meals[1]._id], "user": users[0]._id },
    { "purchaseDate": "2024-01-28T01:52:14.102677", "totalPrice": 66.74, "totalItems": 1, "meal": [meals[0]._id, meals[1]._id, meals[0]._id, meals[1]._id], "user": users[0]._id },
    { "purchaseDate": "2023-12-24T01:52:14.102693", "totalPrice": 20.38, "totalItems": 3, "meal": [meals[0]._id, meals[1]._id], "user": users[0]._id },
    { "purchaseDate": "2024-01-09T01:52:14.102710", "totalPrice": 92.54, "totalItems": 1, "meal": [meals[0]._id], "user": users[0]._id },
    { "purchaseDate": "2024-01-13T01:52:14.102726", "totalPrice": 73.86, "totalItems": 5, "meal": [meals[0]._id], "user": users[0]._id },
    { "purchaseDate": "2023-12-09T01:52:14.102742", "totalPrice": 47.73, "totalItems": 1, "meal": [meals[0]._id, meals[1]._id, meals[0]._id], "user": users[0]._id },
    { "purchaseDate": "2024-01-11T01:52:14.102761", "totalPrice": 87.66, "totalItems": 1, "meal": [meals[0]._id], "user": users[0]._id },
    { "purchaseDate": "2024-01-05T01:52:14.102776", "totalPrice": 44.48, "totalItems": 1, "meal": [meals[0]._id], "user": users[0]._id },
    { "purchaseDate": "2023-12-13T01:52:14.102794", "totalPrice": 14.99, "totalItems": 4, "meal": [meals[0]._id], "user": users[1]._id },
    { "purchaseDate": "2024-01-14T01:52:14.102809", "totalPrice": 35.12, "totalItems": 2, "meal": [meals[0]._id, meals[1]._id, meals[0]._id], "user": users[1]._id },
    { "purchaseDate": "2023-12-09T01:52:14.102825", "totalPrice": 70.06, "totalItems": 4, "meal": [meals[0]._id], "user": users[1]._id },
    { "purchaseDate": "2023-12-24T01:52:14.102843", "totalPrice": 95.89, "totalItems": 4, "meal": [meals[0]._id], "user": users[1]._id },
    { "purchaseDate": "2023-12-24T01:52:14.106194", "totalPrice": 92.41, "totalItems": 1, "meal": [meals[0]._id, meals[1]._id, meals[0]._id], "user": users[1]._id },
    { "purchaseDate": "2024-01-31T01:52:14.106216", "totalPrice": 77.86, "totalItems": 2, "meal": [meals[1]._id, meals[1]._id, meals[1]._id], "user": users[1]._id },
    { "purchaseDate": "2024-01-26T01:52:14.106232", "totalPrice": 88.99, "totalItems": 4, "meal": [meals[1]._id], "user": users[1]._id },
  ])

  await User.findByIdAndUpdate(users[0]._id, {
    $push: { 
      orders: [orders[0]._id, orders[1]._id, orders[2]._id, orders[3]._id, orders[4]._id, orders[5]._id, orders[6]._id, orders[7]._id, orders[8]._id, orders[9]._id],
      reviews: [reviews[0]._id, reviews[1]._id, reviews[2]._id]
    } 
  });
  await User.findByIdAndUpdate(users[1]._id, {
    $push: { 
      orders: [orders[10]._id, orders[11]._id, orders[12]._id, orders[13]._id, orders[14]._id, orders[15]._id, orders[16]._id],
      reviews: [reviews[3]._id, reviews[4]._id, reviews[5]._id]
     }
  });
  process.exit();
});