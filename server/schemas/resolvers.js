const { User, Meal, Order } = require('../models'); 
const { signToken, AuthenticationError } = require('../utils/auth'); 
const stripe = require("stripe")(
  "sk_test_51OjNRdKHAcAwalPXkcEGtEN98mGd64cSKJOqk32VW5b2L2YPESqyMw8zGVTAJm2ukU6yeHdHGPwbevQgKvRIWDqh00dqSeT1yL"
);

const resolvers = {
  Query: {
    meal: async (_, { id }) => {
      return await Meal.findById(id); 
    },
    meals: async () => {
      return await Meal.find({}); 
    },
    order: async (_, { id }) => {
      const order = await Order.findById(id).populate('meal user');
      return order;
    },
    orders: async () => {
      return await Order.find({}).populate('meal user');
    },
    reviews: async () => {
      return await Review.find({}); 
    },
    review: async (_, { id }) => {
      return await Review.findById(id).populate('user');
    },
    user: async (_, { id }) => {
      const user = await User.findById(id).populate({
        path: 'orders',
        populate: { path: 'meal' }
      });
      return user;
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      await Order.create({ meals: args.meals.map(({ _id }) => _id) });
      const line_items = [];
    
     
      for (const meal of args.meals) {
        line_items.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: meal.name,
              description: meal.description,
              images: [`${url}/images/${meal.image}`] 
            },
            unit_amount: meal.price * 100, 
          },
          quantity: meal.purchaseQuantity, 
        });
      }
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, email, password }) => {
      const user = await User.create({ firstName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        console.log('bad user');
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);
      if (!correctPw) {
        console.log('bad pw');
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { meals }, context) => {
      if (context.user) {
        const order = await Order.create({ 
          meal: meals, 
          user: context.user._id, 
        });
    
        await User.findByIdAndUpdate(
          context.user._id, 
          { $push: { orders: order._id } }, 
          { new: true } 
        );
    
        return order;
      } else {
        throw AuthenticationError;
      }
    },
    updateMeal: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Meal.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },
    createPaymentIntent: async (_, { amount, currency }) => {
      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency,
        });
        
        return { clientSecret: paymentIntent.client_secret };
      } catch (err) {
        console.error('Error creating payment intent:', err);
        throw new Error('Could not create payment intent');
      }
    },
  }
};

module.exports = resolvers;
