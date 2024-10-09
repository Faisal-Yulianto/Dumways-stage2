import { Router } from 'express';
import { getReplies, createNewReply } from '../controllers/replyController';

const router = Router();

router.get('/:postId/replies', getReplies);
router.post('/:postId/replies', createNewReply);


export default router;
