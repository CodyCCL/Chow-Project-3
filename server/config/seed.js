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
    [
      {
        "name": "Golden Shrimp Buns",
        "description": "Craving comfort without compromise? Dive into our Golden Seared Shrimp on Toasted Whole-Wheat Roll! Succulent shrimp kissed with fire, nestled on fiber-rich bread, and paired with crispy, spiced wedges for a guilt-free flavor fiesta. Fuel your body and delight your taste buds, the healthy way!",
        "image": "/images/Golden_Shrimp_Buns.jpg",
        "price": 20,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 27,
          "carbs": 30,
          "fat": 25,
          "calories": 780
        }
      },
      {
        "name": "Molten Pirate Burger",
        "description": "These ain't your average smothered burgers. We're talkin' juicy patties charred to perfection, smothered in a molten volcano of creamy pepper jack cheese. But wait, there's more! We add a swashbucklin' blend of caramelized peppers and onions, creating a sweet and spicy fiesta that'll make your taste buds sing.",
        "image": "/images/Molten_Pirate_Burger.jpg",
        "price": 25,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 42,
          "carbs": 40,
          "fat": 45,
          "calories": 960,
        }
      },
      {
        "name": "Sizzling Onion Stack",
        "description": "Burger alert! Ditch the average and say hello to our Sizzling Onion Stack! Think: juicy, lean beef, smoky-sweet onion symphony, and melty cheese perfection. Every bite is a flavor fiesta fueling your body and tickling your taste buds. Dive in, burger lovers!",
        "image": "/images/Sizzling_Onion_Stack.jpg",
        "price": 20,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 20,
          "carbs": 50,
          "fat": 35,
          "calories": 930,
        }
      },
      {
        "name": "Spicy Shrimp Fiesta",
        "description": "A taste of the Baja coast without the plane ticket. Look no further than our Sizzling Baja Shrimp Fiesta! Dive into warm tortillas brimming with succulent shrimp that have been kissed by smoky chipotle spices. Each bite is a vibrant party of flavors, thanks to the refreshing crunch of pico de gallo and the cool, creamy caress of cilantro lime crema. It's a fiesta for your senses that's fueling and flavorful, just the way we do things at Fuel For You! Taco Tuesday just got an upgrade.",
        "image": "/images/Spicy_Shrimp_Fiesta.jpg",
        "price": 23,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 37,
          "carbs": 43,
          "fat": 22,
          "calories": 660
        }
      },
      {
        "name": "Un-fried Chicken Feast",
        "description": "Ditch the greasy guilt and indulge in guilt-free goodness! Our baked, not fried, Monterey Jack chicken delivers juicy flavor without the extra calories. Roasted veggies like sweet carrots and fluffy potato wedges pack in essential vitamins and fiber, while the sriracha mayo adds a satisfying zing with a healthy dollop of fat. It's a delicious and nutritious way to fuel your body!",
        "image": "/images/Un-fried_Chicken_Feast.jpg",
        "price": 25,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 31,
          "carbs": 24,
          "fat": 22,
          "calories": 780
        }
      },
      {
        "name": "Pork & Cabbage Stir-fry",
        "description": "Craving a quick, healthy meal that bursts with flavor? Look no further than our Spicy Sweet Pork & Cabbage Stir-fry! This dish isn't just delicious, it's packed with protein and vitamins. Tender pork mingles with crisp cabbage in a vibrant sweet & spicy sauce, ready to satisfy your cravings and fuel your active lifestyle. Plus, it's made with simple, fresh ingredients and whipped up in a flash – perfect for busy weeknights!",
        "image": "/images/Pork_&_Cabbage_Stir-fry.jpg",
        "price": 18,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 32,
          "carbs": 23,
          "fat": 21,
          "calories": 800
        }
      },
      {
        "name": "Firecracker Meatballs",
        "description": "Our Firecracker Meatballs are more than just delicious. Lean protein balls infused with fiery spices provide a satisfying punch, while roasted green beans deliver essential vitamins and fiber. Fragrant jasmine rice completes the dish with fluffy texture and energizing carbs. It's a healthy and flavorful meal that leaves you feeling satisfied and empowered.",
        "image": "/images/Firecracker_Meatballs.jpg",
        "price": 23,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 37,
          "carbs": 35,
          "fat": 32,
          "calories": 740
        }
      },
      {
        "name": "Sausage Sunken Rigatoni",
        "description": "Once upon a plate, there lived a dish of dreams. Imagine sausage chunks, heroes of bold herb flavors, waltzing with al dente rigatoni in a creamy pink sauce, a blushing beauty hiding lighter secrets. Bell peppers, emeralds of the sea, added playful bursts, and Parmesan, a wise king of cheese, completed the masterpiece. This wasn't just food; it was a love letter to taste buds, a healthy escape for the adventurous soul.",
        "image": "/images/Sausage_Sunken_Rigatoni.jpg",
        "price": 25,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 32,
          "carbs": 52,
          "fat": 35,
          "calories": 880
        }
      },
      {
        "name": "Island BBQ Flatbread",
        "description": "Set sail on a flavor journey with our Tropical Twist Flatbread! Imagine the warm embrace of a toasted island, gently kissed by a wave of tangy BBQ sauce. Sun-kissed pineapple chunks dance on top, their sweetness a playful serenade to your taste buds. This isn't just a flatbread; it's a taste of adventure, a healthy escape for your palate.",
        "image": "/images/Island_BBQ_Flatbread.jpg",
        "price": 15,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 26,
          "carbs": 41,
          "fat": 27,
          "calories": 740
        }
      },
      {
        "name": "Southwest Fiesta Tacos",
        "description": "Tender, seasoned ground beef sizzling in a hot pan, infused with the warmth of smoky spices. Nestled in warm tortillas, these beauties are topped with a creamy, melty Monterey Jack cheese that'll make your taste buds sing. But wait, there's more! A vibrant cilantro lime slaw, bursting with freshness and a hint of citrus, adds a refreshing tone to every bite.",
        "image": "/images/Southwest_Fiesta_Tacos.jpg",
        "price": 18,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 25,
          "carbs": 45,
          "fat": 25,
          "calories": 920
        }
      },
      {
        "name": "Citrus Ricotta Brussels",
        "description": "Forget predictable flatbreads! Embark on a flavor adventure with crispy, golden Brussels sprouts caramelized in a sweet and spicy honey glaze. Imagine them nestled on a bed of creamy, citrusy lemon ricotta, all resting on a warm, inviting flatbread. Each bite is a delightful dance of sweet, savory, and spicy, offering a refreshing twist with a hint of citrus.",
        "image": "/images/Citrus_Ricotta_Brussels.jpg",
        "price": 15,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 8,
          "carbs": 32,
          "fat": 16,
          "calories": 760
        }
      },
      {
        "name": "Beef Boats with Salsa",
        "description": "Level up your snack game with guilt-free goodness! Ditch the greasy, fried routine and say hello to baked flautas packed with protein-rich lean beef. Light and crispy tortillas embrace the savory filling, while a vibrant pico de gallo salsa bursts with essential vitamins. Top it off with a smoky red pepper crema made with real ingredients for a flavor explosion without compromise. Indulge in this delicious and nutritious choice that fuels your body and satisfies your cravings!",
        "image": "/images/Beef_Boats_with_Salsa.png",
        "price": 18,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 33,
          "carbs": 31,
          "fat": 22,
          "calories": 920
        }
      },
      {
        "name": "Spicy Sweet Fajitas",
        "description": "A warm embrace of a tortilla filled with tender, caramelized sweet potato chunks dancing alongside crisp bell peppers and onions, all sizzling with fajita spices. A cool dollop of creamy lime sour cream offers a refreshing counterpoint, while pickled jalapenos and fiery Pepper Jack cheese add a zesty kick that ignites your taste buds. Each bite is a symphony of textures and flavors, an adventure for your senses.",
        "image": "/images/Spicy_Sweet_Fajitas.jpg",
        "price": 18,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 37,
          "carbs": 47,
          "fat": 27,
          "calories": 870
        }
      },
      {
        "name": "Baked Lean Pork Flautas",
        "description": "Dive into a symphony of flavors and textures with these crispy taco boats overflowing with tender pork, tangy pico de gallo, cool lime crema, and velvety guacamole. Each bite is a fiesta of juicy pork, crunchy textures, and refreshing flavors that will transport your taste buds to paradise.",
        "image": "/images/Baked_Lean_Pork_Flautas.jpg",
        "price": 25,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 31,
          "carbs": 34,
          "fat": 26,
          "calories": 1020
        }
      },
      {
        "name": "Soy Glazed Steak Tacos",
        "description": "Tender, marinated steak kissed with a sweet and savory soy glaze takes center stage in these mouthwatering tacos. The glaze, bursting with umami depth and a hint of subtle sweetness, perfectly complements the robust flavor of the beef. Each bite is an explosion of textures, with the soft tortillas yielding to the juicy steak, while the crisp crunch of fresh vegetables adds a refreshing counterpoint.",
        "image": "/images/Soy_Glazed_Steak_Tacos.jpg",
        "price": 25,
        "quantity": 0,
        "category": categories[1]._id,
        "macros": {
          "protein": 47,
          "carbs": 33,
          "fat": 31,
          "calories": 800
        }
      }
    ]
    
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