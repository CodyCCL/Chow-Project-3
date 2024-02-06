const { Category, Ingredients, Macros, Meal, Order, Restaurant, Review, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
          },
    },
    Mutation: {}
}

module.exports = resolvers;