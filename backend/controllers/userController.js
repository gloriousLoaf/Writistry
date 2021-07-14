/* USER CONTROLLER */
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

/**
 * @desc      Auth user & get token
 * @route     POST /api/users/login
 * @access    Public
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  // if user exists & password match
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

/**
 * @desc      Register new user
 * @route     POST /api/users
 * @access    Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // is user already in db?
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  // new user obj
  const user = await User.create({
    name,
    email,
    password,
  });

  // create user
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

/**
 * @desc      Get user profile
 * @route     GET /api/users/profile/:id
 * @access    Public
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).populate('blogposts');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

/**
 * @desc      Update user profile
 * @route     PUT /api/users/profile/:id
 * @access    Private/Auth'd Users
 */
const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, bio } = req.body;

  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.bio = bio || user.bio;
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      bio: updatedUser.bio,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

/**
 * @desc      Update user profile
 * @route     PUT /api/users/profile/auth/:id
 * @access    Private/Auth'd Users
 */
const updateUserPassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const user = await User.findById(req.user._id).select('+password');

  // if user exists & password match
  if (user && (await user.matchPassword(currentPassword))) {
    user.password = newPassword;
    await user.save();
    res.json({
      updated: 'yes',
    });
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

/**
 * @desc      Update user profile
 * @route     PUT /api/users/profile/avatar/:id
 * @access    Private/Auth'd Users
 */
const updateUserAvatar = asyncHandler(async (req, res) => {
  const { avatarString } = req.body;

  const user = await User.findById(req.user._id);

  // if user exists & password match
  if (user) {
    user.avatarString = avatarString;
    await user.save();
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

/**
 * @desc      Get all user
 * @route     GET /api/users
 * @access    Private/Admin
 */
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

/**
 * @desc      Delete user
 * @route     DELETE /api/users/:id
 * @access    Private/Admin
 */
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.remove();
    res.json({ message: 'User removed.' });
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

// UNUSED??
/**
 * @desc      Get a user by id
 * @route     GET /api/users/:id
 * @access    Private/Admin
 */
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

// UNUSED??
/**
 * @desc      Update user
 * @route     PUT /api/users/:id
 * @access    Private/Admin
 */
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    // admin can set isAdmin to false. if undefined, fallback to original value
    // could be nullish operator, but those are scary...
    // user.isAdmin = req.body.isAdmin ?? user.isAdmin;
    user.isAdmin =
      req.body.isAdmin === undefined || null ? user.isAdmin : req.body.isAdmin;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
  updateUserAvatar,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
