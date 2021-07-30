/* BLOG POST VIEW */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
// TODO: see in render below readingList
// import ShareLink from 'react-twitter-share-link';
import { getBlogById } from '../actions/blogActions';
import { saveReadingList, deleteReadingList } from '../actions/userActions';
import Wrapper from '../components/Wrapper';
import Bookmark from '../components/Bookmark';
import BookmarkFilled from '../components/BookmarkFilled';
import { dateFix } from '../helpers/helpers';

const BlogView = ({ match }) => {
  // to display correct Bookmark button
  const [bookmarkButton, setBookmarkButton] = useState();
  // to hide bookmark options on a user's own blogposts
  const [myBlogpost, setMyBlogpost] = useState(false);

  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogById);
  const { blogpost } = blogDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getBlogById(match.params.id));
  }, [dispatch, match]);

  // if the user authored this blogpost, hide bookmark options
  useEffect(() => {
    if (userInfo && blogpost.authorId === userInfo._id) {
      setMyBlogpost(true);
    } else {
      setMyBlogpost(false);
    }
  }, [userInfo, blogpost]);

  /**
   * userInfo and blogpost data are used to update
   * local state hook bookmarkButton, so that the UI
   * can reflect correct Bookmark button
   */
  useEffect(() => {
    if (userInfo && userInfo !== null) {
      // filter for this blogpost matches entry in readingList
      const isMatch = userInfo.readingList.filter(
        (readBlogpost) => readBlogpost === blogpost._id
      );
      if (isMatch[0] === blogpost._id) {
        setBookmarkButton(true);
      } else {
        setBookmarkButton(false);
      }
    }
  }, [userInfo, blogpost]);

  // TODO: see Twitter share link in render, below readingList
  // const link = window.location.href;

  const saveToReadingList = () => {
    dispatch(saveReadingList(blogpost._id)).then((data) => {
      userInfo.readingList = data.readingList;
      setBookmarkButton(true);
    });
  };

  const removeFromReadingList = () => {
    dispatch(deleteReadingList(blogpost._id)).then((data) => {
      userInfo.readingList = data.readingList;
      setBookmarkButton(false);
    });
  };

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
          {/* not signed in */}
          {!userInfo && (
            <div className='my-5'>
              <p className='font-weight-bold'>
                Sign In to save this to your Reading List
              </p>
              <Link to={'/signin'}>Sign In</Link>
            </div>
          )}
          {/* not my own blogpost + signed in === show bookmark options */}
          {myBlogpost === false && userInfo && (
            <div className='my-3'>
              <p>
                <span className='font-weight-bold'>
                  {bookmarkButton === false ? (
                    <>
                      <Bookmark buttonClick={saveToReadingList} />
                      Add to your Reading List
                    </>
                  ) : (
                    <>
                      <BookmarkFilled buttonClick={removeFromReadingList} />
                      Remove from your Reading List
                    </>
                  )}
                </span>
              </p>
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
