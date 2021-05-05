import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { listPosts } from '../actions/blogActions';
import { dateFix } from '../helpers/helpers';

const BlogCard = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { blogposts } = blogList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <>
      {blogposts ? (
        blogposts.map((blogpost) => (
          <Card key={blogpost._id} className='my-4'>
            <Card.Body>
              <Link to={`/blogposts/${blogpost._id}`}>
                <Card.Title className='mb-2'>{blogpost.name}</Card.Title>
              </Link>
              <Card.Text>{blogpost.byline}</Card.Text>
              <Card.Text>{dateFix(blogpost.createdAt)}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <>
          <h2>Loading...</h2>
          <p>
            Could not reach the database. Or the author just needs to get to
            work!
          </p>
        </>
      )}
    </>
  );
};

export default BlogCard;
