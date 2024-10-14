import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    console.log("Nama file yang diupload:", fileName); 
    cb(null, fileName); 
  }
});

export const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; 
    if (!allowedTypes.includes(file.mimetype)) {
      const error = new Error('Only images are allowed');
    
      return cb(error);
    }
    cb(null, true);
  }
});



