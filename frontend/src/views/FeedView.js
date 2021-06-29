/* FEED VIEW */
import React from 'react';
import Wrapper from '../components/Wrapper';
import BlogCard from '../components/BlogCard';

const FeedView = () => {
  return (
    <Wrapper>
      <h1>The Feed</h1>
      <p>Recent posts from the community</p>
      <BlogCard />
    </Wrapper>
  );
};

export default FeedView;
