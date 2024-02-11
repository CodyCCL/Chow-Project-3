import { gql } from '@apollo/client';

export const QUERY_MEALS = gql`

  {
    meals {
        _id
        name
        description
        image
        price
        quantity
        macros {
            protein
            carbs
            fat
            calories
        }
    }
}`;

