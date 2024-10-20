import express from 'express';
import { handleCreatePost } from '../controllers/postController'; // Pastikan ini mengarah ke controller yang benar
import upload from '../middlewares/multer';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

// Rute untuk membuat post
router.post('/posts', authenticate, upload.single('image'), handleCreatePost);

export default router;
