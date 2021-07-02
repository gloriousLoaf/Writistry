/* HOME VIEW */
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import BlogCard from '../components/BlogCard';
import { getUserProfileById } from '../actions/userActions';
import { dateFix } from '../helpers/helpers';

const ProfileView = ({ match }) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { userInfo } = userProfile;

  let blogposts;
  if (userInfo) {
    blogposts = userInfo.blogposts;
  }

  // to compare auth'd user vs current profile being viewed
  const sessionUser = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    dispatch(getUserProfileById(match.params.id));
  }, [dispatch, match]);

  return (
    <Wrapper>
      {userInfo && (
        <>
          <h1 className='text-center'>{userInfo.name}</h1>
          <Row className='my-4'>
            <Col className='my-2 text-center'>
              <p>Joined on {dateFix(userInfo.createdAt)}</p>
              <p>TODO: Add user bio</p>
              {userInfo._id === sessionUser._id && (
                <Link to={`/profile/${userInfo._id}/edit`}>Edit Profile</Link>
              )}
            </Col>
          </Row>
          {blogposts.length > 0 && (
            <Row className='my-4'>
              <Col className='my-2'>
                <BlogCard blogposts={blogposts} userInfo={userInfo} />
              </Col>
            </Row>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default ProfileView;
