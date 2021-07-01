/* HOME VIEW */
import React, { useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/blogActions';
// import { dateFix } from '../helpers/helpers';

const ProfileView = () => {
  const dispatch = useDispatch();

  // const blogList = useSelector((state) => state.blogList);
  // const { blogposts } = blogList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1 className='text-center'>{userInfo.name}</h1>
      <Row className='my-4'>
        <Col className='my-2'>
          {/* TODO: add createdAt to state - userController */}
          {/* <p>Joined on {dateFix(userInfo.createdAt)}</p> */}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ProfileView;
