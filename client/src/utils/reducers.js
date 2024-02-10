import {
    UPDATE_MEALS,
  } from "./actions";
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case UPDATE_MEALS:
        return {
          ...state,
          meals: [...action.meals],
        };
  
  
      default:
        return state;
    }
  };
  