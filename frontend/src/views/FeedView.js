/* FEED VIEW */
import React, { useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import BlogCard from '../components/BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/blogActions';

const FeedView = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { blogposts } = blogList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>The Feed</h1>
      <p>Recent posts from the community</p>
      <BlogCard blogposts={blogposts} userInfo={userInfo} />
    </Wrapper>
  );
};

export default FeedView;
