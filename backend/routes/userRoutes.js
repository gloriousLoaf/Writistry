/* USER ROUTER */
import express from 'express';
import {
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
} from '../controllers/userController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, isAdmin, getUsers);
router.post('/login', authUser);
router
  .route('/profile/:id')
  .get(getUserProfile)
  .put(protect, updateUserProfile);
router.route('/profile/auth/:id').put(protect, updateUserPassword);
router.route('/profile/avatar/:id').put(protect, updateUserAvatar);
router
  .route('/:id')
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUser);

export default router;
