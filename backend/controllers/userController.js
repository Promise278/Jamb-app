import User from '../models/User.js';
import bcrypt from 'bcrypt';

// Get profile
export const getProfile = async (req, res) => {
  res.json(req.user);
};

// Update profile
export const updateProfile = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (firstname) req.user.firstname = firstname;
  if (lastname) req.user.lastname = lastname;
  if (email) req.user.email = email;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    req.user.password = await bcrypt.hash(password, salt);
  }

  const updatedUser = await req.user.save();
  res.json(updatedUser);
};
