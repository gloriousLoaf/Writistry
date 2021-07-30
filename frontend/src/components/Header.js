/* HEADER COMPONENT */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';
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
            aria-controls='navbar-toggle'
            className='rounded-0'
            aria-label='Menu'
          />
          <Navbar.Collapse id='navbar-toggle'>
            <Nav className='ml-auto'>
              <LinkContainer to='/feed' className='text-dark'>
                <Nav.Link>Feed</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <>
                  <LinkContainer
                    to={`/profile/${userInfo._id}`}
                    className='text-dark'
                  >
                    <Nav.Link>Profile</Nav.Link>
                  </LinkContainer>
                  <LinkContainer
                    to={`/readingList/${userInfo._id}`}
                    className='text-dark'
                  >
                    <Nav.Link>Reading List</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/create' className='text-dark'>
                    <Nav.Link>Create Post</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/'>
                    <Nav.Link onClick={logoutHandler}>Sign Out</Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <LinkContainer to='/signin' className='text-dark'>
                  <Nav.Link>Sign In</Nav.Link>
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
