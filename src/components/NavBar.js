import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to='/'>Workout Buddy</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to='/login'><NavItem eventKey={1}>Log In</NavItem></LinkContainer>
        <LinkContainer to='/signup'><NavItem eventKey={2}>Sign Up</NavItem></LinkContainer>
        <LinkContainer to='/profile'><NavItem eventKey={3}>Profile </NavItem></LinkContainer>
        <LinkContainer to='/workouts/new'><NavItem eventKey={4}>Workout Log </NavItem></LinkContainer>

      </Nav>
    </Navbar>
  )
}

export default NavBar
