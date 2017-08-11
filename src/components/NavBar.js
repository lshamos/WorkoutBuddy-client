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
        <LinkContainer to='/profile'><NavItem eventKey={3}>Workout Log </NavItem></LinkContainer>
        <LinkContainer to='/workouts/new'><NavItem eventKey={4}>New Workout </NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
        <LinkContainer to='/signup'><NavItem eventKey={2}>Sign Up</NavItem></LinkContainer>
        {
          props.currentUser
          ? <LinkContainer to='/logout'><NavItem eventKey={5}>Log Out</NavItem></LinkContainer>
          : <LinkContainer to='/login'><NavItem eventKey={1}>Log In</NavItem></LinkContainer>
        }
        <LinkContainer to='/Profile'><NavItem eventKey={5}>
          {
            props.currentUser
            ? <p>Current User: {props.currentUser.name}</p>
            : null
          }
      </NavItem></LinkContainer>
      </Nav>
    </Navbar>
  )
}

export default NavBar
