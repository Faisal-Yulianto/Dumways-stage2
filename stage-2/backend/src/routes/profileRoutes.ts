import express from 'express';
import { updateProfile } from '../controllers/profileController';
import { authenticate } from '../middlewares/authMiddleware';
import upload from '../middlewares/multer';

const router = express.Router();

router.put('/profile', authenticate, upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'background', maxCount: 1 }
]), updateProfile);

export default router;
