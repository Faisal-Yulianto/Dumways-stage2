import { Router } from 'express';
import { getPosts } from '../controllers/addStatus';

const router = Router();

router.get('/', getPosts);

export default router;