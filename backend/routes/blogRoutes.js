/* BLOG ROUTER */
import express from 'express';
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlogById,
  deleteBlogById,
} from '../controllers/blogController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getBlogs).post(protect, isAdmin, createBlog);
router
  .route('/:id')
  .get(getBlogById)
  .put(protect, isAdmin, updateBlogById)
  .delete(protect, isAdmin, deleteBlogById);

export default router;
