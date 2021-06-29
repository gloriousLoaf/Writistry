/* HEADER COMPONENT */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <span>
              <Navbar.Brand href='/'>Writistry</Navbar.Brand>
            </span>
          </LinkContainer>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='rounded-0'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {userInfo ? (
                <NavDropdown
                  alignRight
                  title={<span className='text-dark'>{userInfo.name}</span>}
                  id='username'
                >
                  <NavDropdown.Item onClick={logoutHandler}>
                    Sign Out
                  </NavDropdown.Item>
                  {userInfo && userInfo.isAdmin && (
                    <LinkContainer to='/admin/create'>
                      <NavDropdown.Item>Create Blogpost</NavDropdown.Item>
                    </LinkContainer>
                  )}
                </NavDropdown>
              ) : (
                <LinkContainer to='/signin'>
                  <Nav.Link className='text-dark'>Sign In</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
