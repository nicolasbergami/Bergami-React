import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge
} from 'mdb-react-ui-kit';
export function NavBar(){

return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Bici Mundo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
          <Nav.Link href="#link"> 
          <MDBBadge pill color='danger'>!</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span> 🛒</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

)


} 

