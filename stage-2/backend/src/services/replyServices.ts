import prisma from '../utils/prismaClient';
import { CreateReplyDto } from '../dto/reply-dto';

export const getRepliesByPost = async (postId: number) => {
  return await prisma.reply.findMany({
    where: { postId },
    include: {
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
};

export const createReply = async (dto: CreateReplyDto) => {
    return await prisma.reply.create({
      data: {
        content: dto.content,
        postId: dto.postId,
        userId: dto.userId,
        replyCount: dto.replyCount ?? 0, 
      },
    });
};
