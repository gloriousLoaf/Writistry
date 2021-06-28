/* BLOG CONTROLLER */
import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';

/**
 * @desc      Fetch all blogs
 * @route     GET /api/blogs
 * @access    Public
 */
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

/**
 * @desc      Fetch single blog
 * @route     GET /api/blogs/:id
 * @access    Public
 */
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error('blog post not found');
  }
});

/**
 * @desc      Create a blog
 * @route     POST /api/blogs
 * @access    Private/Admin
 */
const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    name: req.body.name,
    byline: req.body.byline,
    content: req.body.content,
  });

  const createdblog = await blog.save();
  res.status(201).json(createdblog);
});

/**
 * @desc      Update a blog
 * @route     PUT /api/blogs/:id
 * @access    Private/Admin
 */
const updateBlogById = asyncHandler(async (req, res) => {
  const { name, byline, content } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.name = name;
    blog.byline = byline;
    blog.content = content;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error('blog not found.');
  }
});

/**
 * @desc      Delete single blog post
 * @route     DELETE /api/blogs/:id
 * @access    Private/Admin
 */
const deleteBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.remove();
    res.json({ message: 'Blog removed.' });
  } else {
    res.status(404);
    throw new Error('Blog not found.');
  }
});

export { getBlogs, getBlogById, createBlog, updateBlogById, deleteBlogById };
