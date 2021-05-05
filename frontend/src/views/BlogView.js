/* BLOG POST VIEW */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../actions/blogActions';
import Wrapper from '../components/Wrapper';

const BlogView = ({ match }) => {
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogById);
  const { blogpost } = blogDetails;

  useEffect(() => {
    dispatch(getPostById(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      {blogpost ? (
        <Wrapper>
          <h1>{blogpost.name}</h1>
          <p>{blogpost.byline}</p>
          <p>{blogpost.content}</p>
        </Wrapper>
      ) : (
        <h1>asdf</h1>
      )}
    </>
  );
};

export default BlogView;
