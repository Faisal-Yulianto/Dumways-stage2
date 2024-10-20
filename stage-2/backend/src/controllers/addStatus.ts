import { Request, Response } from 'express';
import prisma from '../utils/prismaClient'; 

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        content: true,
        image: true,
        createdAt: true,
        likes: true,
        replies: true,
        user: {
          select: {
            id: true,
            username: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    const formattedPosts = posts.map(post => ({
      ...post,
    }));

    res.json(formattedPosts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};
