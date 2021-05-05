/* BLOG POST VIEW */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { getPostById } from '../actions/blogActions';
import Wrapper from '../components/Wrapper';
import { dateFix } from '../helpers/helpers';

const BlogView = ({ match }) => {
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogById);
  const { blogpost } = blogDetails;

  useEffect(() => {
    dispatch(getPostById(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      {blogpost && blogpost.createdAt ? (
        <Wrapper>
          <ReactMarkdown children={`# ${blogpost.name}`} />
          <ReactMarkdown children={`_${blogpost.byline}_`} />
          <ReactMarkdown
            children={dateFix(blogpost.createdAt)}
            className='small'
          />
          <hr />
          <ReactMarkdown children={blogpost.content} className='my-4' />
        </Wrapper>
      ) : (
        <>
          <h1>Loading...</h1>
          <p>
            Could not reach the database. Or the author just needs to get to
            work!
          </p>
        </>
      )}
    </>
  );
};

export default BlogView;
