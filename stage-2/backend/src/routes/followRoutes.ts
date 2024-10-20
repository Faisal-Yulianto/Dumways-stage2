import express from 'express';
import { followUserService, unfollowUserService } from '../services/followServices';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

// Endpoint untuk follow user
router.post('/follow/:followingId', authenticate, async (req, res) => {
  const followingIdString = req.params.followingId; // Ini bertipe string
  const followerIdString = req.user.id; // ID user yang sedang login (asumsikan ini sudah bertipe string)

  // Mengonversi ID ke tipe number
  const followingId = parseInt(followingIdString, 10);
  const followerId = parseInt(followerIdString, 10);

  if (isNaN(followingId) || isNaN(followerId)) {
    return res.status(400).json({ message: 'Invalid IDs provided.' });
  }

  try {
    const result = await followUserService(followerId, followingId); // passing as number
    return res.status(result.status).json(result.message);
  } catch (error) {
    return res.status(500).json({ error: 'Error following user.' });
  }
});

// Endpoint untuk unfollow user
router.delete('/unfollow/:followingId', authenticate, async (req, res) => {
  const followingIdString = req.params.followingId; // Ini bertipe string
  const followerIdString = req.user.id; // ID user yang sedang login

  // Mengonversi ID ke tipe number
  const followingId = parseInt(followingIdString, 10);
  const followerId = parseInt(followerIdString, 10);

  if (isNaN(followingId) || isNaN(followerId)) {
    return res.status(400).json({ message: 'Invalid IDs provided.' });
  }

  try {
    const result = await unfollowUserService(followerId, followingId); // passing as number
    return res.status(result.status).json(result.message);
  } catch (error) {
    return res.status(500).json({ error: 'Error unfollowing user.' });
  }
});

export default router;

