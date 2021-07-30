/* READING LIST VIEW */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import BlogCard from '../components/BlogCard';
import { getUserProfileById } from '../actions/userActions';

const ReadingListView = ({ match }) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { userInfo } = userProfile;

  useEffect(() => {
    dispatch(getUserProfileById(match.params.id));
  }, [dispatch, match]);

  return (
    <Wrapper>
      <h1>Reading List</h1>
      <p>Catch up on posts you've bookmarked</p>
      {userInfo && userInfo.readingList[0] ? (
        <BlogCard blogposts={userInfo.readingList} userInfo={userInfo} />
      ) : (
        <>
          <h2 className='h6'>Looks like you're all caught up!</h2>
          <p>
            Head to the <Link to={'/feed'}>Feed</Link> to read the latest posts
            from the community.
          </p>
        </>
      )}
    </Wrapper>
  );
};

export default ReadingListView;
