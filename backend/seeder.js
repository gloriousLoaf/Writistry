import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import blogposts from './data/blogposts.js';
import Blog from './models/blogModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const createdBlogs = await Blog.insertMany(blogposts);

    console.log('Data import successful'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.invers);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();

    console.log('Data destroy successful'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

process.argv[2] === '-d' ? destroyData() : importData();
