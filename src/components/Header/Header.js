import React from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Box } from '@mui/system';

const Header = () => {
    const {user, logout} =useAuth();
    return (
        
        <>
  <Navbar bg="dark" variant="dark"  sticky="top" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand href="#home">AL AMIN MOTORS </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/bikes">Explores</Nav.Link>
      <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
      <Nav.Link as={HashLink} to="/addService">Added A New Services</Nav.Link>
      <Nav.Link as={HashLink} to="/manageServices">Manage All Orders</Nav.Link>
      <Nav.Link as={HashLink} to="/about">About</Nav.Link>

      {
      user?.email ?
      <Box>
          <NavLink as={Link} to="/dashboard">
            <Button color="inherit">Dashboard</Button>
            </NavLink> 
           <Button onClick={logout} variant="light">Logout</Button>
      </Box>
       
         :
      <NavLink as={Link} to="/login"><Button color="inherit">Login</Button></NavLink> 
      }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
</>

    );
};

export default Header;


