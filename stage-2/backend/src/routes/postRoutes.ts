import express from "express";
import { upload } from "../middlewares/multer";
import { authenticate } from '../middlewares/authMiddleware'; 
import { handleCreatePost } from "../controllers/postController";

const router = express.Router();
router.post("/posts", authenticate, upload.single("image"), handleCreatePost);
export default router;


