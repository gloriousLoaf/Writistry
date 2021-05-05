/* BLOG MODEL */
import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    byline: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model('Product', blogSchema);

export default Blog;
