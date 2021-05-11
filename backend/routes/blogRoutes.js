/* BLOG ROUTER */
import express from 'express';
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlogById,
} from '../controllers/blogController.js';
import { isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getBlogs).post(isAdmin, createBlog);
router.route('/:id').get(getBlogById).put(updateBlogById);

export default router;
