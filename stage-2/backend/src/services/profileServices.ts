import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateProfile = async (
  userId: number,
  name: string,
  username: string,
  bio: string,
  file: Express.Multer.File | undefined
) => {
  try {
    const avatarPath = file ? `/uploads/${file.filename}` : undefined; 

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        username,
        bio,
        avatar: avatarPath,
      },
    });

    return updatedUser;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw new Error('Failed to update profile');
  }
};
