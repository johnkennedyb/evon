import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Import React Bootstrap components
import ShoppingCartIcon from './ShopCartIcon'; // Import the SVG icon component

function Header() {
  const cartItemsCount = useSelector(state => state.cart.cartItems.length);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className='px-5' href="/">MANAV'S SHOP</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Products</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/cart">
            <ShoppingCartIcon />
            <span className="badge badge-pill badge-danger ml-1">{cartItemsCount}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
