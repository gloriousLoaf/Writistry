/* SERVER */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const app = express();

process.env.NODE_ENV === 'development';

app.use(express.json());

// ES modules
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// production vs development
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running.');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
