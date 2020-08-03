import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar , Nav  ,Form,} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad , faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Navbarr extends Component {
    state = { 
        
    }
    render() { 
        return ( 
          <Navbar bg="info" variant="dark" className="sticky-top">
            <Link to="/">
            <Navbar.Brand><FontAwesomeIcon icon={faGamepad} size="2x"/></Navbar.Brand>
            </Link>

          <Nav className="mr-auto">
          <Link to="/">
            <Navbar.Brand>Products</Navbar.Brand>
            </Link>           
          </Nav>
          <Form inline>
          <Link to="/cart">
            <Navbar.Brand><FontAwesomeIcon icon={faShoppingCart} size="lg"/></Navbar.Brand>
            </Link>
          </Form>
        </Navbar> 
         )
    }
}
 
export default Navbarr;