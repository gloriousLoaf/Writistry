import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogCard = ({ blogposts }) => {
  return (
    // <Card className='my-4'>
    //   <Card.Body>
    //     <Link to={`/blogposts/${blogpost._id}`}>
    //       <Card.Title className='mb-2'>{blogpost.title}</Card.Title>
    //       <Card.Text>{blogpost.byline}</Card.Text>
    //     </Link>
    //   </Card.Body>
    // </Card>

    <>
      <Card className='my-4'>
        <Card.Body>
          <Link to={'/'}>
            <Card.Title className='mb-2'>This is a smart blog post</Card.Title>
          </Link>
          <Card.Text>
            17 Ways to write a listicle that will do big numbers
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='my-4'>
        <Card.Body>
          <Link to={'/'} className='mb-2'>
            <Card.Title>This is a smart blog post</Card.Title>
          </Link>
          <Card.Text>
            17 Ways to write a listicle that will do big numbers
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='my-4'>
        <Card.Body>
          <Link to={'/'}>
            <Card.Title className='mb-2'>This is a smart blog post</Card.Title>
          </Link>
          <Card.Text>
            17 Ways to write a listicle that will do big numbers
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
