import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogCard = ({ blogpost }) => {
  return (
    // <Card className='my-2'>
    //   <Card.Body>
    //     <Link to={`/blogposts/${blogpost._id}`}>
    //       <Card.Title>by {blogpost.title}</Card.Title>
    //       <Card.Subtitle className='mb-2'>{blogpost.username}</Card.Subtitle>
    //       <Card.Text>{blogpost.byline}</Card.Text>
    //     </Link>
    //   </Card.Body>
    // </Card>

    <>
      <Card className='my-2'>
        <Card.Body>
          <Link to={'/'}>
            <Card.Title>This is a smart blog post</Card.Title>
          </Link>
          <Card.Subtitle className='mb-2'>by Some Person</Card.Subtitle>
          <Card.Text>
            17 Ways to write a listicle that will do big numbers
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='my-2'>
        <Card.Body>
          <Link to={'/'}>
            <Card.Title>This is a smart blog post</Card.Title>
          </Link>
          <Card.Subtitle className='mb-2'>by Some Person</Card.Subtitle>
          <Card.Text>
            17 Ways to write a listicle that will do big numbers
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='my-2'>
        <Card.Body>
          <Link to={'/'}>
            <Card.Title>This is a smart blog post</Card.Title>
          </Link>
          <Card.Subtitle className='mb-2'>by Some Person</Card.Subtitle>
          <Card.Text>
            17 Ways to write a listicle that will do big numbers
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
