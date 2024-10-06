import express from 'express';
import {
  addLike,
  removeLike,
  getLikesCount,
  getUserLikeStatus
} from '../controllers/likeController';

const router = express.Router();

// Tambah like
router.post('/', addLike);

// Hapus like
router.delete('/:postId/:userId', removeLike);

// Menghitung jumlah likes
router.get('/count/:postId', getLikesCount);

// Memeriksa status like user
router.get('/:postId/:userId', getUserLikeStatus);

export default router;
