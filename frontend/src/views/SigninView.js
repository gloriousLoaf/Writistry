/* SIGNIN VIEW */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import Message from '../components/Message';
import { login } from '../actions/userActions';

const SigninView = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  // prevent signed-in users from seeing sign in page
  useEffect(() => {
    userInfo && history.push('/feed');
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Wrapper>
      {error && (
        <Message variant='danger'>
          Could not find a user account with those credentials.
        </Message>
      )}
      <Col xs={12} md={8}>
        <h2>Sign In</h2>
      </Col>
      <Form onSubmit={submitHandler}>
        <Col xs={12} md={8}>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='danger'>
            Sign In
          </Button>
        </Col>
      </Form>

      <Col xs={12} md={8} className='my-4'>
        Need an account? <Link to={'/signup'}>Sign Up</Link>
      </Col>
    </Wrapper>
  );
};

export default SigninView;
