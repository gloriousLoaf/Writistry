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
      {/* <h2 className='h5'>Write - Publish - Read</h2> */}
      <Row className='my-4'>
        <Col xs={12} md={4} className='my-2 text-center'>
          <Image src='./logo512.png' className='selfie' fluid />
        </Col>
        <Col xs={12} md={8} className='my-2'>
          <p>
            Writistry is a place for developers, designers and tech writers to
            create and share. Whether you choose to create full blog posts or
            share short thoughts with the public, this platform empowers you to
            write, read and save your favorite content.
          </p>
          <p>
            When you join Writistry, you get access to your own simple content
            management system with <strong>Markdown support</strong>. Create
            your posts in the CMS, or copy and paste them in from your preferred
            authoring environment. The choice is yours.
          </p>
          <p>
            Please see the <Link to='/terms'>Terms and Conditions</Link> before
            contributing to this platform. For development-related issues,
            please visit the{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://gitub.com/gloriousLoaf/Writistry'
            >
              GitHub repo
            </a>
            . This is your community too, so jump in and contribute!
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
