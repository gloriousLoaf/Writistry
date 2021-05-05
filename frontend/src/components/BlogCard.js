import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { listPosts } from '../actions/blogActions';

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
          <Card key={blogposts._id} className='my-4'>
            <Card.Body>
              <Link to={`/blogposts/${blogpost._id}`}>
                <Card.Title className='mb-2'>{blogpost.name}</Card.Title>
              </Link>
              <Card.Text>{blogpost.byline}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>yo</h1>
      )}
    </>
  );
};

export default BlogCard;
