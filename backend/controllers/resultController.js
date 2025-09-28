import Result from '../models/Result.js';

// Submit result
export const submitResult = async (req, res) => {
  const result = await Result.create({ ...req.body, user: req.user._id });
  res.status(201).json(result);
};

// Get user results
export const getUserResults = async (req, res) => {
  const results = await Result.find({ user: req.params.userId }).populate('exam');
  res.json(results);
};

