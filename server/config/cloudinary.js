require('dotenv').config(); // Load environment variables
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cloudinary Storage Setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "partTime", // Folder name in your Cloudinary account
    allowed_formats: ["jpg", "png", "jpeg"], // Allowed file types
  },
});

module.exports = { cloudinary, storage };
