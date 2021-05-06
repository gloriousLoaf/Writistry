/* BLOG POST VIEW */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import ShareLink from 'react-twitter-share-link';
import { getPostById } from '../actions/blogActions';
import Wrapper from '../components/Wrapper';
import { dateFix, titleFix } from '../helpers/helpers';
import { Link } from 'react-router-dom';

const BlogView = ({ match }) => {
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogById);
  const { blogpost } = blogDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getPostById(match.params.id));
  }, [dispatch, match]);

  const link = window.location.href;

  return (
    <>
      {blogpost && blogpost.createdAt ? (
        <Wrapper>
          <ReactMarkdown children={blogpost.name} />
          <ReactMarkdown children={`_${blogpost.byline}_`} />
          <ReactMarkdown
            children={dateFix(blogpost.createdAt)}
            className='small'
          />
          <hr />
          <ReactMarkdown children={blogpost.content} className='my-4' />
          <hr />
          {userInfo ? (
            <div className='my-5'>
              <p>
                <span className='font-weight-bold'>Share this on Twitter</span>{' '}
                - I would be so grateful!
              </p>
              <ShareLink
                className='my-5'
                text={`Check out this blog post by @davidmcodes - "${titleFix(
                  blogpost.name
                )}"`}
                link={link}
              >
                {(link) => (
                  <a href={link} target='_blank' rel='noreferrer'>
                    {titleFix(blogpost.name)}
                  </a>
                )}
              </ShareLink>
            </div>
          ) : (
            <div className='my-5'>
              <p>
                <span className='font-weight-bold'>
                  Sign In to share this on Twitter
                </span>{' '}
                - I would be so grateful!
              </p>
              <Link to={'/signin'}>Sign In</Link>
            </div>
          )}
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
