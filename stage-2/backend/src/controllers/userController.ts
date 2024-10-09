import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '../utils/jwt';

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" }); 
    }

    const decoded = verifyToken(token); 
    if (!decoded || !decoded.userId) {
      return res.status(401).json({ error: "Invalid token" }); 
    }

    const userId = decoded.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id:true,
        username: true,
        bio: true,
        avatar: true,
        name: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};