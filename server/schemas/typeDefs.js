
const typeDefs = `
type Category {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Order {
    _id: ID
    totalPrice: Float
    totalItems: Int
    meal: [Meal]
    user: [User]
  }

  type Meal {
    _id: ID
    name: String
    description: String
    price: Float
    quantity: Int
    macros: Macros
  }

  type Macros {
    _id: ID
    protien: Int
    carbs: Int
    fat: Int
    calories: Int
  }

  type Review {
    _id: ID
    comment: String
    raitingCount: Int
    user: User
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    categories: [Category]
    user: User
    meal: Meal
    order: Order
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
  `;

module.exports = typeDefs;