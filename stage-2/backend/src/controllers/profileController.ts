import { Request, Response } from 'express';
import uploadImageToCloudinary from '../utils/cloudinary'; 
import prisma from '../utils/prismaClient';

interface AuthenticatedRequest extends Request {
  user?: { userId: number };
}

export const updateProfile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, username, bio } = req.body;

    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    let avatarUrl, backgroundUrl;

    if (req.files && 'avatar' in req.files) {
      const avatarFileArray = req.files['avatar'] as Express.Multer.File[];
      if (avatarFileArray && avatarFileArray.length > 0) {
        const avatarBuffer = avatarFileArray[0].buffer; 
        const avatarResult = await uploadImageToCloudinary(avatarBuffer);

        if (!avatarResult) {
          return res.status(500).json({ message: 'Failed to upload avatar' });
        }

        avatarUrl = avatarResult.secure_url; // URL from Cloudinary
      }
    }

    // Handle background upload
    if (req.files && 'background' in req.files) {
      const backgroundFileArray = req.files['background'] as Express.Multer.File[];
      if (backgroundFileArray && backgroundFileArray.length > 0) {
        const backgroundBuffer = backgroundFileArray[0].buffer;
        const backgroundResult = await uploadImageToCloudinary(backgroundBuffer);
    
        // Periksa hasil upload
        if (!backgroundResult) {
          return res.status(500).json({ message: 'Failed to upload background image' });
        }
    
        // Pastikan URL valid
        backgroundUrl = backgroundResult.secure_url;
      } else {
        console.error('No background file provided');
      }
    }
    

    // Update user profile in database
    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data: {
        name,
        username,
        bio,
        avatar: avatarUrl ? avatarUrl : undefined,
        background: backgroundUrl ? backgroundUrl : undefined,
      },
    });

    res.status(200).json({ message: 'Profile updated successfully', updatedUser });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
