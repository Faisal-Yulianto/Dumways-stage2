import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';

export const addLike = async (req: Request, res: Response) => {
  const { postId, userId } = req.body;

  try {
    const parsedPostId = parseInt(postId);
    const parsedUserId = parseInt(userId);

    if (isNaN(parsedPostId) || isNaN(parsedUserId)) {
      return res.status(400).json({ message: 'Invalid postId atau userId' });
    }

    const postExists = await prisma.post.findUnique({ where: { id: parsedPostId } });
    if (!postExists) {
      return res.status(404).json({ message: 'Post tidak ditemukan' });
    }

    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: {
          userId: parsedUserId,
          postId: parsedPostId,
        },
      },
    });

    if (existingLike) {
      return res.status(400).json({ message: 'Post sudah dilike oleh user ini' });
    }

    await prisma.like.create({
      data: {
        postId: parsedPostId,
        userId: parsedUserId,
      },
    });

    await prisma.post.update({
      where: { id: parsedPostId },
      data: { likeCount: { increment: 1 } },
    });

    res.status(201).json({ message: 'Post berhasil dilike' });
  } catch (error) {
    console.error('Error saat liking post:', error);
    res.status(500).json({ message: 'Error liking post', error: error instanceof Error ? error.message : error });
  }
};

// Hapus like dari post
export const removeLike = async (req: Request, res: Response) => {
  const { postId, userId } = req.params;

  try {
    const parsedPostId = parseInt(postId);
    const parsedUserId = parseInt(userId);

    if (isNaN(parsedPostId) || isNaN(parsedUserId)) {
      return res.status(400).json({ message: 'Invalid postId atau userId' });
    }

    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: {
          userId: parsedUserId,
          postId: parsedPostId,
        },
      },
    });

    if (!existingLike) {
      return res.status(404).json({ message: 'Like tidak ditemukan untuk user ini' });
    }

    await prisma.like.delete({
      where: {
        id: existingLike.id,
      },
    });

    await prisma.post.update({
      where: { id: parsedPostId },
      data: { likeCount: { decrement: 1 } },
    });

    res.status(200).json({ message: 'Like berhasil dihapus' });
  } catch (error) {
    console.error('Error saat menghapus like:', error);
    res.status(500).json({ message: 'Error unliking post', error: error instanceof Error ? error.message : error });
  }
};

// Menghitung jumlah likes di post
export const getLikesCount = async (req: Request, res: Response) => {
  const { postId } = req.params;

  try {
    const parsedPostId = parseInt(postId);
    if (isNaN(parsedPostId)) {
      return res.status(400).json({ message: 'Invalid postId' });
    }

    const post = await prisma.post.findUnique({
      where: { id: parsedPostId },
      select: { likeCount: true },
    });

    if (!post) {
      return res.status(404).json({ message: 'Post tidak ditemukan' });
    }

    res.status(200).json({ likeCount: post.likeCount });
  } catch (error) {
    console.error('Error saat mendapatkan jumlah likes:', error);
    res.status(500).json({ message: 'Error mendapatkan jumlah likes', error: error instanceof Error ? error.message : error });
  }
};

// Memeriksa status like user di post
export const getUserLikeStatus = async (req: Request, res: Response) => {
  const { postId, userId } = req.params;

  try {
    const parsedPostId = parseInt(postId);
    const parsedUserId = parseInt(userId);

    if (isNaN(parsedPostId) || isNaN(parsedUserId)) {
      return res.status(400).json({ message: 'Invalid postId atau userId' });
    }

    const userLike = await prisma.like.findUnique({
      where: {
        userId_postId: {
          postId: parsedPostId,
          userId: parsedUserId,
        },
      },
    });

    res.status(200).json({ liked: !!userLike });
  } catch (error) {
    console.error('Error saat memeriksa status like:', error);
    res.status(500).json({ message: 'Error memeriksa status like', error: error instanceof Error ? error.message : error });
  }
};
