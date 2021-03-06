/* USER MODEL */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    bio: {
      type: String,
      required: false,
    },
    avatarString: {
      type: String,
      required: true,
      default: 'no avatar set yet',
    },
    blogposts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Blog',
      },
    ],
    readingList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Blog',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// bcrypt method for passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// middleware - salting presave
userSchema.pre('save', async function (next) {
  // do not rehash if not modified
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
