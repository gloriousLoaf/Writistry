import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { dateFix } from '../helpers/helpers';

const BlogCard = ({ blogposts, userInfo }) => {
  return (
    <>
      {blogposts ? (
        blogposts
          .slice(0)
          .reverse()
          .map((blogpost) => (
            <Card key={blogpost._id} className='my-4'>
              <Card.Body>
                <Link to={`/blogposts/${blogpost._id}`}>
                  <Card.Title className='mb-2'>{blogpost.name}</Card.Title>
                </Link>
                <Card.Text>{blogpost.byline}</Card.Text>
                <Card.Text>
                  by{' '}
                  <Link
                    to={{
                      pathname: `/profile/${blogpost.authorId}`,
                      userProfile: { blogpost },
                    }}
                  >
                    {blogpost.author}
                  </Link>
                </Card.Text>
                <Card.Text>{dateFix(blogpost.createdAt)}</Card.Text>
                {userInfo && userInfo._id === blogpost.authorId && (
                  <div className='d-flex flex-row-reverse'>
                    <Link to={`./edit/${blogpost._id}`}>Edit</Link>
                  </div>
                )}
              </Card.Body>
            </Card>
          ))
      ) : (
        <>
          <h2>Loading...</h2>
          <p>Trying to reach the database.</p>
        </>
      )}
    </>
  );
};

export default BlogCard;
