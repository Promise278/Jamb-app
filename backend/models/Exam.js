import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model('Exam', examSchema);
