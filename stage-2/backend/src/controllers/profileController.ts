import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';

interface AuthenticatedRequest extends Request {
  user?: { userId: number };
}

export const updateProfile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, username, bio } = req.body;

    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const avatar = req.file
    ? `/uploads/${req.file.filename}` 
    : undefined

    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data: {
        name,
        username,
        bio,
        avatar: avatar ? avatar : undefined, 
      },
    });

    res.status(200).json({ message: 'Profile updated successfully', updatedUser });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
