/* HOME VIEW */
import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';

const HomeView = () => {
  return (
    <Wrapper>
      <h1>Welcome to Writistry</h1>
      <Row className='my-4'>
        <Col xs={12} md={4} className='my-2 text-center'>
          <Image
            src='./images/metcalf.png'
            className='selfie'
            roundedCircle
            fluid
          />
        </Col>
        <Col xs={12} md={8} className='my-2'>
          <p>
            A blog about coding, tech and developer life by{' '}
            <strong>David Metcalf</strong>.
          </p>
          <p>
            I am a web dev sharing helpful tips and explainers on all things
            full-stack.
          </p>
          <p>
            Sometimes that means digging into some code. Other times, it's about
            work-life balance or what I'm reading at the moment.
          </p>
        </Col>
      </Row>

      <Row className='my-4'>
        <Col xs={12} md={12} className='text-center'>
          <Link to='/feed' className='to-feed'>
            See the latest posts!
          </Link>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default HomeView;
