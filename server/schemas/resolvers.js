const { Category, Ingredients, Macros, Meal, Order, Restaurant, Review, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                path: 'orders.meal',
                populate: 'category'
                });
        
                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        
                return user;
            }
        throw AuthenticationError;
        },
        meal: async (parent, { _id }) => {
            return await Meal.findById(_id).populate('category');
          },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user_id).populate({
                    path: 'orders.meal',
                    populate: 'category'
                });

                return user.orders.id(_id);
            }
            throw AuthenticationError;
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw AuthenticationError;
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          }
    }
}

module.exports = resolvers;