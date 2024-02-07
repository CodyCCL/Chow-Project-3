import { useState, useEffect } from 'react';
//import css if any
import Auth from '../utils/auth';
//import Utils for local storage or API if any



  // set up useEffect hook to save `savedIds` list to localStorage on component unmount

  // Todo:create method to search for Food and set state on form submit
  const handleFormSubmit = async (event) => 
    event.preventDefault();

  

  // Todo:create function to handle saving a book to our database
  
    // find the Food in `searchMenu` state by the matching id
    const bookToSave = searchedBooks.find((food) => food.bookId === foodId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

//    if (!token) {
//     return false;
//    }
//
//    try {
//      const response = await saveFood(foodToSave, token);
//
//     if (!response.ok) {
//        throw new Error('something went wrong!');
//      }
    
      // TOdo: Create a if Food successfully saves to user's account, save Food id to state


//export default SearchMenu;
