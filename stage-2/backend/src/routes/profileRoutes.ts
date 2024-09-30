import express from 'express';
import { updateProfile } from '../controllers/profileController';
import { authenticate } from '../middlewares/authMiddleware';
import { upload } from '../middlewares/multer'; 

const router = express.Router();

router.put('/profile', authenticate, upload.single('avatar'), updateProfile);

export default router;
