// followRoutes.ts
import express from 'express';
import { followUserService, unfollowUserService } from '../services/followServices';
import { authenticate } from '../middlewares/authMiddleware';
import jwt, { JwtPayload } from 'jsonwebtoken' // Import tipe JwtPayload

const router = express.Router();

// Endpoint untuk follow user
router.post('/follow/:followingId', authenticate, async (req, res) => {
  const followingIdString = req.params.followingId; // Ini bertipe string
  const followerId = (req.user as JwtPayload).id; // Mengakses id dengan aman

  // Mengonversi ID ke tipe number
  const followingId = parseInt(followingIdString, 10);

  if (isNaN(followingId)) {
    return res.status(400).json({ message: 'Invalid following ID provided.' });
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
  const followerId = (req.user as JwtPayload).id; // Mengakses id dengan aman

  // Mengonversi ID ke tipe number
  const followingId = parseInt(followingIdString, 10);

  if (isNaN(followingId)) {
    return res.status(400).json({ message: 'Invalid following ID provided.' });
  }

  try {
    const result = await unfollowUserService(followerId, followingId); // passing as number
    return res.status(result.status).json(result.message);
  } catch (error) {
    return res.status(500).json({ error: 'Error unfollowing user.' });
  }
});

export default router;
