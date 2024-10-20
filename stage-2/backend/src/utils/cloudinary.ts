import cloudinary from 'cloudinary';
import { UploadApiResponse, v2 as cloudinaryV2 } from 'cloudinary';

// Configure Cloudinary
cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageToCloudinary = async (fileBuffer: Buffer): Promise<UploadApiResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinaryV2.uploader.upload_stream({ folder: 'user_profiles' }, (error, result) => {
      if (error) {
        reject(error);  // If error occurs, reject the promise
      } else if (result) {
        resolve(result);  // If result exists, resolve the promise with result
      } else {
        resolve(undefined);  // Handle unexpected case where result is undefined
      }
    }).end(fileBuffer); // Send the buffer to Cloudinary
  });
};

export default uploadImageToCloudinary;
