/* BLOG POST VIEW */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import ShareLink from 'react-twitter-share-link';
import { getBlogById } from '../actions/blogActions';
import Wrapper from '../components/Wrapper';
import { dateFix } from '../helpers/helpers';

const BlogView = ({ match }) => {
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogById);
  const { blogpost } = blogDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getBlogById(match.params.id));
  }, [dispatch, match]);

  const link = window.location.href;

  return (
    <>
      {blogpost && blogpost.createdAt ? (
        <Wrapper>
          {userInfo && userInfo._id === blogpost.authorId && (
            <Link
              to={{
                pathname: `/edit/${blogpost._id}`,
                blogProps: { blogpost },
                userProps: { userInfo },
              }}
            >
              Edit this post
            </Link>
          )}
          <ReactMarkdown children={`# ${blogpost.name}`} />
          <ReactMarkdown children={`_${blogpost.byline}_`} />
          <ReactMarkdown
            children={`**by [${blogpost.author}](/profile/${blogpost.authorId})**`}
          />
          <ReactMarkdown
            children={dateFix(blogpost.createdAt)}
            className='small'
          />
          <hr />
          <ReactMarkdown children={blogpost.content} className='my-4' />
          <hr />
          {userInfo && blogpost ? (
            <div className='my-5'>
              <p>
                <span className='font-weight-bold'>Share this on Twitter</span>
              </p>
              <ShareLink
                className='my-5'
                text={`Check out this blog post by @davidmcodes - "${blogpost.name}"`}
                link={link}
              >
                {(link) => (
                  <a href={link} target='_blank' rel='noreferrer'>
                    {blogpost.name}
                  </a>
                )}
              </ShareLink>
            </div>
          ) : (
            <div className='my-5'>
              <p>
                <span className='font-weight-bold'>
                  Sign In to share this on Twitter
                </span>
              </p>
              <Link to={'/signin'}>Sign In</Link>
            </div>
          )}
        </Wrapper>
      ) : (
        <>
          <h1>Loading...</h1>
          <p>Trying to reach the database.</p>
        </>
      )}
    </>
  );
};

export default BlogView;
