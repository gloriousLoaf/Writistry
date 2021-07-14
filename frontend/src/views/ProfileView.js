/* HOME VIEW */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Avatar from 'boring-avatars';
import Wrapper from '../components/Wrapper';
import BlogCard from '../components/BlogCard';
import { getUserProfileById } from '../actions/userActions';
import { joinedDate } from '../helpers/helpers';

const ProfileView = ({ match }) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { userInfo } = userProfile;

  // authored blogposts linked to user in db
  let blogposts;
  if (userInfo) {
    blogposts = userInfo.blogposts;
  }

  // to compare auth'd user vs current profile being viewed
  // see Link for 'Edit Profile' below
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
              <div className='mb-3'>
                <Avatar
                  size={100}
                  name={userInfo.avatarString}
                  variant='beam'
                  colors={[
                    '#F9F9F9',
                    '#B6B2AC',
                    '#EEDF1A',
                    '#FF221C',
                    '#1D2440',
                  ]}
                />
              </div>
              <p>Joined on {joinedDate(userInfo.createdAt)}</p>
              {!userInfo.bio || userInfo.bio === ' ' ? (
                <p>No bio available yet.</p>
              ) : (
                <p>{userInfo.bio}</p>
              )}
              {sessionUser && userInfo._id === sessionUser._id && (
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
