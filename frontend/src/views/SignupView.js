/* SIGNUP VIEW */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import { register } from '../actions/userActions';

const SignupView = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/feed';

  // prevent signed-in users from seeing sign up page
  useEffect(() => {
    userInfo && history.push(redirect);
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      return;
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <Wrapper>
      <Col xs={12} md={8}>
        <h2>Sign Up</h2>
      </Col>
      <Form onSubmit={submitHandler}>
        <Col xs={12} md={8}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength='8'
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength='8'
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='agreeToTerms'>
            <Form.Check type='checkbox'>
              <Form.Check.Input required />
              <Form.Check.Label>
                I agree to the <Link to='/terms'>Terms and Conditions</Link>
              </Form.Check.Label>
            </Form.Check>
          </Form.Group>
          <Button type='submit' variant='danger'>
            Create Account
          </Button>
        </Col>
      </Form>
      <Col xs={12} md={8} className='my-4'>
        Already have an account? <Link to={'/signin'}>Sign In</Link>
      </Col>
    </Wrapper>
  );
};

export default SignupView;
