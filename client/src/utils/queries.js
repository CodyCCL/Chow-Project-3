import { gql } from "@apollo/client";

export const QUERY_MEALS = gql`
  query {
    meals {
      _id
      name
      description
      price
      quantity
      image
      macros {
        calories
        protein
        carbs
        fat
      }
    }
  }
`;
