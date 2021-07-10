/* HOME VIEW */
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import {
  getUserProfileById,
  updateProfile,
  updatePassword,
  logout,
} from '../actions/userActions';
import Message from '../components/Message';

const ProfileEditView = ({ match, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [socialNetwork, setSocialNetwork] = useState('Facebook');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { userInfo } = userProfile;

  // to compare auth'd user vs current profile being viewed
  const sessionUser = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    dispatch(getUserProfileById(match.params.id));
  }, [dispatch, match]);

  // prevent users from seeing another user's edit view
  useEffect(() => {
    if (!sessionUser || sessionUser._id !== match.params.id) {
      history.push('/feed');
    }
  }, [match, history, sessionUser]);

  const submitDetailsHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile(name, email, bio)).then(() => {
      history.push(`/profile/${userInfo._id}`);
    });
  };

  const submitPasswordHandler = (e) => {
    e.preventDefault();
    if (
      currentPassword === '' ||
      newPassword === '' ||
      confirmPassword === ''
    ) {
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      dispatch(updatePassword(currentPassword, newPassword)).then(() => {
        dispatch(logout()).then(() => {
          history.push('/signin');
        });
      });
    }
  };

  const submitUserAvatar = async (e) => {
    e.preventDefault();
    // TODO: submit this to backend;
    // use network-avatar-picker to get url, add to models & db
    console.log('socialNetwork', socialNetwork);
    console.log('username', username);
  };

  return (
    <Wrapper>
      <h1>Update Your Profile Details</h1>
      <p>Edit any of these three fields, then submit the changes.</p>
      {passwordMatch === false && (
        <Message variant='danger'>
          New Password and Confirm Password fields must match.
        </Message>
      )}
      {userInfo && (
        <>
          <Row className='mb-5'>
            <Col>
              <Form onSubmit={submitDetailsHandler}>
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder={userInfo.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder={userInfo.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='bio'>
                  <Form.Label>Personal Bio: 250 characters</Form.Label>
                  {/* see userActions for validation */}
                  {/* user does not have bio ? use placeholder : set bio as defaultValue*/}
                  {!userInfo.bio || userInfo.bio === ' ' ? (
                    <Form.Control
                      type='text'
                      as='textarea'
                      placeholder='Tell everyone about yourself'
                      value={bio}
                      maxLength={250}
                      onChange={(e) => setBio(e.target.value)}
                    ></Form.Control>
                  ) : (
                    <Form.Control
                      type='text'
                      as='textarea'
                      defaultValue={userInfo.bio}
                      maxLength={250}
                      onChange={(e) => setBio(e.target.value)}
                    ></Form.Control>
                  )}
                </Form.Group>
                <Button type='submit' variant='danger'>
                  Submit Updates
                </Button>
              </Form>
            </Col>
          </Row>

          <Row className='mb-5'>
            <Col>
              <Form onSubmit={submitPasswordHandler}>
                <Form.Group controlId='currentPassword'>
                  <h2>Update Password</h2>
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Current password'
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    minLength='8'
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='newPassword'>
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='New password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    minLength='8'
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Confirm new password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minLength='8'
                    required
                  ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='danger'>
                  Change Password
                </Button>
              </Form>
            </Col>
          </Row>

          <Row className='mb-5'>
            <Col>
              <Form onSubmit={submitUserAvatar}>
                <Form.Group controlId='socialSite'>
                  <h3 className='h5'>Update Your Avatar</h3>
                  <p>
                    Pick a social network from the dropdown options, then add
                    your username in the next field. The avatar for that account
                    will be added to Writistry. See below submit button for
                    privacy details.
                  </p>
                  <Form.Label>Social Network</Form.Label>
                  <Form.Control
                    as='select'
                    value={socialNetwork}
                    onChange={(e) => setSocialNetwork(e.target.value)}
                    required
                  >
                    <option value='facebook'>Facebook</option>
                    <option value='github'>GitHub</option>
                    <option value='gmail'>Gmail</option>
                    <option value='instagram'>Instagram</option>
                    <option value='tumblr'>Tumblr</option>
                    <option value='twitter'>Twitter</option>
                    <option value='vimeo'>Vimeo</option>
                    <option value='youtube'>YouTube</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId='socialUsername'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='someUser823659'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='danger'>
                  Update Avatar
                </Button>
                <p className='mt-3'>
                  We will not share this data. This form will get the URL for
                  your avatar; no other information from your social media
                  account will be shared with us.
                </p>
              </Form>
            </Col>
          </Row>
        </>
      )}
    </Wrapper>
  );
};

export default ProfileEditView;
