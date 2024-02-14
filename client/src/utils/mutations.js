import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      meal {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_PAYMENT_INTENT = gql`
  mutation CreatePaymentIntent($amount: Int!, $currency: String!) {
    createPaymentIntent(amount: $amount, currency: $currency) {
      clientSecret
    }
  }
`;