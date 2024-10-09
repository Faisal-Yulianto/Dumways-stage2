import { Request, Response } from 'express';
import { getRepliesByPost, createReply } from '../services/replyServices';
import { CreateReplyDto } from '../dto/reply-dto';

export const getReplies = async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const replies = await getRepliesByPost(Number(postId));
    res.json(replies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching replies', error });
  }
};
export const createNewReply = async (req: Request, res: Response) => {
  console.log(req.body); 
  try {
    const { content, postId, userId }: CreateReplyDto = req.body;
    const reply = await createReply({
      content,
      postId,
      userId,
      replyCount: 0,
    });
    res.status(201).json(reply);
  } catch (error) {
    res.status(500).json({ message: 'Error creating reply', error });
  }
};



