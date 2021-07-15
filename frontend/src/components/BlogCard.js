import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { dateFix } from '../helpers/helpers';
import Avatar from 'boring-avatars';

const BlogCard = ({ blogposts, userInfo }) => {
  // to compare auth'd user vs current profile being viewed
  const sessionUser = JSON.parse(localStorage.getItem('userInfo'));

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
                  <Avatar
                    style={{ marginRight: '2rem' }}
                    size={25}
                    name={blogpost.authorAvatar}
                    variant='beam'
                    colors={[
                      '#F9F9F9',
                      '#B6B2AC',
                      '#EEDF1A',
                      '#FF221C',
                      '#1D2440',
                    ]}
                  />
                  <Link
                    className='ml-2'
                    to={{
                      pathname: `/profile/${blogpost.authorId}`,
                      userProfile: { blogpost },
                    }}
                  >
                    {blogpost.author}
                  </Link>
                </Card.Text>
                <Card.Text>{dateFix(blogpost.createdAt)}</Card.Text>
                {userInfo &&
                  sessionUser &&
                  blogpost.authorId === sessionUser._id && (
                    <div className='d-flex flex-row-reverse'>
                      <Link
                        to={{
                          pathname: `/edit/${blogpost._id}`,
                          blogProps: { blogpost },
                          userProps: { userInfo },
                        }}
                      >
                        Edit
                      </Link>
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
