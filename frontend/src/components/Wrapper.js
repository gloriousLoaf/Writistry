import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Wrapper = ({ children }) => {
  return (
    <Container className='my-3'>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={8}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Wrapper;
