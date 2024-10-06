import { PrismaClient } from "@prisma/client";
import { AuthenticatedRequest } from '../middlewares/authMiddleware'; 

const prisma = new PrismaClient();

export const createPost = async (req: AuthenticatedRequest) => {
  const { content } = req.body;

  if (!req.user) {
    throw new Error("User not authenticated");
  }

  const userId = req.user.userId;
  const fileName = req.file ? req.file.filename : "no-file"; 
  console.log("Nama file yang disimpan:", fileName); 
  const post = await prisma.post.create({
    data: {
      content,
      image: fileName,  
      userId
    },
  });

  return post;
};

