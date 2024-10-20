import { AuthenticatedRequest } from '../middlewares/authMiddleware'; 
import { Response } from "express";
import { createPost } from "../services/postServices";

export const handleCreatePost = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const post = await createPost(req);
    res.status(201).json({ message: "Post created successfully", post }); // Menggunakan status 201 untuk "created"
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create post" });
  }
  
  // Debugging logs
  console.log("Request body:", req.body); 
  console.log("Uploaded file:", req.file);
};
