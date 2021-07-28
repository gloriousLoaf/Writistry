/* BLOG POST VIEW */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
// TODO: see in render below readingList
// import ShareLink from 'react-twitter-share-link';
import { getBlogById } from '../actions/blogActions';
import { deleteReadingList, saveReadingList } from '../actions/userActions';
import Wrapper from '../components/Wrapper';
import Bookmark from '../components/Bookmark';
import BookmarkFilled from '../components/BookmarkFilled';
import { dateFix } from '../helpers/helpers';

const BlogView = ({ match }) => {
  // to display correct Bookmark button
  const [bookmarkButton, setBookmarkButton] = useState(false);
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

  /**
   * userInfo and blogpost data are used to update
   * local state hook bookmarkButton, so that the UI
   * can reflect correct Bookmark button
   */
  useEffect(() => {
    if (userInfo.readingList[0] === undefined) {
      setBookmarkButton(false);
    } else {
      userInfo.readingList.forEach((blog) => {
        // if already in readList, show BookmarkFilled
        if (blog === blogpost._id) {
          setBookmarkButton(true);
        } else {
          setBookmarkButton(false);
        }
      });
    }
  }, [userInfo, blogpost]);

  useEffect(() => {
    // if the user authored this blogpost, hide bookmarks
    if (blogpost.authorId === userInfo._id) {
      setMyBlogpost(true);
    } else {
      setMyBlogpost(false);
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
          {myBlogpost === false && userInfo && blogpost ? (
            <>
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
              {/* TODO: Revamp / rethink Twitter sharing links */}
              {/* <div className='my-5'>
                <p className='font-weight-bold'>Share this on Twitter</p>

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
              </div> */}
            </>
          ) : (
            <></>
            // TODO: Twitter link, see above
            // <div className='my-5'>
            //   <p className='font-weight-bold'>
            //     Sign In to Save this article or share it on Twitter
            //   </p>
            //   <Link to={'/signin'}>Sign In</Link>
            // </div>
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
