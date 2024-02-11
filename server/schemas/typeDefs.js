const typeDefs =`

  type Meal {
    _id: ID!
    name: String!
    description: String
    image: String
    price: Float!
    quantity: Int
    macros: Macros
  }

  type Macros {
    protein: Int
    carbs: Int
    fat: Int
    calories: Int
  }

  type Order {
    _id: ID!
    purchaseDate: String
    meal: [Meal!]!
    user: User!
  }

  type Review {
    _id: ID!
    comment: String
    ratingCount: Int
    user: User
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    phone: String
    email: String
    orders: [Order]
    reviews: [Review]
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  input MealInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Query {
    meal(id: ID!): Meal
    meals: [Meal]
    reviews: [Review]
    order(id: ID!): Order
    orders: [Order]
    review(id: ID!): Review 
    user(id: ID!): User
    checkout(meal: [MealInput]): Checkout
    # Add other query definitions as needed
  }

  type Mutation {
    addUser(firstName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(meal: [ID]!): Order
    updateMeal(_id: ID!, quantity: Int!): Meal
    updateUser(firstName: String, lastName: String, email: String, password: String): User
  }
`;
module.exports = typeDefs;