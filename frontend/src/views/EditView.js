/* EDIT BLOG POST VIEW - ADMIN */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import Wrapper from '../components/Wrapper';
import { updatePost, deletePost } from '../actions/blogActions';

const EditView = ({ match, history }) => {
  const [name, setName] = useState('');
  const [byline, setByline] = useState('');
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { blogposts } = blogList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/feed');
    }
    const fillData = () => {
      blogposts.forEach((post) => {
        if (post._id === match.params.id) {
          setName(post.name);
          setByline(post.byline);
          setContent(post.content);
        }
      });
    };
    fillData();
  }, [userInfo, history, blogposts, match]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePost(match.params.id, name, byline, content)).then(
      (data) => {
        history.push(`/blogposts/${data._id}`);
      }
    );
  };

  const deleteModalShowHandler = () => {
    setShowModal(true);
  };

  const deleteModalCloseHandler = () => {
    setShowModal(false);
  };

  const deletePostHandler = () => {
    dispatch(deletePost(match.params.id)).then(() => {
      history.push('/feed');
    });
  };

  return (
    <>
      {name && (
        <Wrapper>
          <h1>Edit blog post</h1>
          <p>
            Changes will not be saved until you submit them. For more details on
            blogging with markdown, head to the{' '}
            <Link to={'/create'}>Create Blogpost page</Link> or go here to{' '}
            <a
              href='https://www.markdownguide.org/basic-syntax/'
              target='_blank'
              rel='noreferrer'
            >
              learn more about simple markdown syntax.
            </a>{' '}
          </p>

          <Form className='my-4' onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Enter a title less than 75 characters'
                defaultValue={name}
                maxLength={75}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='byline'>
              <Form.Label>Byline</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Hook the reader in less than 50 characters'
                defaultValue={byline}
                maxLength={75}
                onChange={(e) => setByline(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='content'>
              <Form.Label>Content of your post</Form.Label>
              <Form.Control
                required
                as='textarea'
                rows='6'
                placeholder='About 5000 words max. Go!'
                defaultValue={content}
                maxLength={35000}
                onChange={(e) => setContent(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='danger'>
              Submit
            </Button>
            <Button
              className='ml-3'
              variant='outline-danger'
              onClick={deleteModalShowHandler}
            >
              Delete
            </Button>
          </Form>
        </Wrapper>
      )}

      <Modal show={showModal} onHide={deleteModalCloseHandler} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            This post will be <b>deleted from our servers forever</b>.
          </p>
          <p>Make sure you have a backup for your archives.</p>
        </Modal.Body>

        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant='danger' onClick={deletePostHandler}>
            Delete Forever
          </Button>
          <Button variant='outline-danger' onClick={deleteModalCloseHandler}>
            Back to Editor
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditView;
