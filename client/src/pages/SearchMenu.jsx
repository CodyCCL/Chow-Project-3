import { useState, useEffect } from 'react';
//import css
import { Container, Row, Col } from "reactstrap";
import reactlogo from '../../public/vite.svg';
import Auth from '../utils/auth.js';
//import Utils for local storage or API if any



  // set up useEffect hook to save `savedIds` list to localStorage on component unmount

  // Todo:create method to search for Food and set state on form submit
  const handleFormSubmit = async (event) => 
    event.preventDefault();

  

  // Todo:create function to handle saving a book to our database
  
    // find the Food in `searchMenu` state by the matching id
    //const bookToSave = searchedBooks.find((food) => food.bookId === foodId);

    // // get token
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

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
      function SearchMenu() {
        return (
          <Container>
          <Row>
            <Col className='Menu-items'>
              <img className='img-position' src={reactlogo}/>
              1 of 3 menu item</Col>
            <Col className='Menu-items'>2 of 3 menu item</Col>
            <Col className='Menu-items'>3 of 3 menu item</Col>
          </Row>
          <Row>
            <Col className='Menu-items'>1 of 3 menu item</Col>
            <Col className='Menu-items'>2 of 3 menu item</Col>
            <Col className='Menu-items'>3 of 3 menu item</Col>
          </Row>
        </Container>
        );
    }
    

export default SearchMenu;
