import Exam from '../models/Exam.js';

// Create exam
export const createExam = async (req, res) => {
  const exam = await Exam.create(req.body);
  res.status(201).json(exam);
};

// Get all exams
export const getExams = async (req, res) => {
  const exams = await Exam.find();
  res.json(exams);
};
