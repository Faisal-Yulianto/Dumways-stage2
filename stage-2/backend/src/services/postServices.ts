import { PrismaClient } from "@prisma/client";
import { AuthenticatedRequest } from '../middlewares/authMiddleware'; 
import uploadImageToCloudinary from '../utils/cloudinary'; 

const prisma = new PrismaClient();

export const createPost = async (req: AuthenticatedRequest) => {
  const { content } = req.body;

  // Memastikan user sudah terautentikasi
  if (!req.user || !req.user.userId) {
    throw new Error("User not authenticated");
  }

  const userId = req.user.userId; // Mendapatkan ID pengguna yang sedang login
  let imageUrl: string | null = null; // Menggunakan null jika tidak ada gambar

  // Mengecek apakah ada file yang diupload
  if (req.file) {
    const imageBuffer = req.file.buffer; // Mendapatkan buffer dari file
    const imageResult = await uploadImageToCloudinary(imageBuffer); // Upload ke Cloudinary

    if (!imageResult) {
      throw new Error('Failed to upload image');
    }

    imageUrl = imageResult.secure_url; // URL dari Cloudinary
  }

  // Membuat post di database
  const post = await prisma.post.create({
    data: {
      content,
      image: imageUrl, // Mengizinkan null jika imageUrl tidak ada
      userId,
    },
  });

  return post; // Mengembalikan pos yang telah dibuat
};
