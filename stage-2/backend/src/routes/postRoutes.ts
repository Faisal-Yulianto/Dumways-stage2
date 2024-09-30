import express from "express";
import multer from "multer";
import { authenticate } from '../middlewares/authMiddleware'; 
import { handleCreatePost } from "../controllers/postController";
import path from "path";

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, '../uploads') }); 

router.post("/posts", authenticate, upload.single("image"), handleCreatePost);
export default router;


