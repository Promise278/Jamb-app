import express from 'express';
import { submitResult, getUserResults } from '../controllers/resultController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, submitResult);
router.get('/:userId', protect, getUserResults);

export default router;
