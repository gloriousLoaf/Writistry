/* CREATE BLOG VIEW - ADMIN */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import Wrapper from '../components/Wrapper';
import { createBlog } from '../actions/blogActions';

const CreateView = ({ history }) => {
  const [name, setName] = useState('');
  const [byline, setByline] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/feed');
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createBlog(name, byline, content)).then((data) => {
      history.push(`/blogposts/${data._id}`);
    });
  };

  return (
    <Wrapper>
      <h1>Create a blog post</h1>
      <p>
        This blog supports{' '}
        <a
          href='https://www.markdownguide.org/basic-syntax/'
          target='_blank'
          rel='noreferrer'
        >
          basic Markdown syntax.
        </a>{' '}
        The <strong>Title</strong> and <strong>Byline</strong> inputs will be
        automatically formatted for you. The <strong>Content</strong> textarea
        is where the fun happens. Remember to double-space and return between
        blocks of text that you would like rendered as separate paragraphs with
        line breaks. <strong>HTML</strong> tags are <em>not</em> supported.
      </p>

      <Form className='my-4' onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Blog Title: max 75 characters</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Enter a title less than 75 characters'
            value={name}
            maxLength={75}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='byline'>
          <Form.Label>Byline: max 75 characters</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Hook the reader in less than 75 characters'
            value={byline}
            maxLength={75}
            onChange={(e) => setByline(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='content'>
          <Form.Label>Content: max about 5000 words</Form.Label>
          <Form.Control
            required
            as='textarea'
            rows='6'
            placeholder='About 5000 words max. Go!'
            value={content}
            maxLength={35000}
            onChange={(e) => setContent(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='danger'>
          Post
        </Button>
      </Form>
    </Wrapper>
  );
};

export default CreateView;
