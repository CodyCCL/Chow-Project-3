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
    await cleanDB('','');

    // Our seed source for our data models....

});