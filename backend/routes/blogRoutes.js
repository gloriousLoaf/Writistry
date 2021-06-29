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

router.route('/').get(getBlogs).post(protect, createBlog);
router
  .route('/:id')
  .get(getBlogById)
  .put(protect, updateBlogById)
  .delete(protect, deleteBlogById);

export default router;
