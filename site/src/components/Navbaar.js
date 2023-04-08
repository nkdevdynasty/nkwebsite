import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
const Navbaar = () => {
  return (
    <Navbar variant="dark" fixed="top" className='navbar'>
    <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Achivements</Nav.Link>
        <Nav.Link href="#features">Academics</Nav.Link>
        <Nav.Link href="#pricing">Opportunities</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbaar