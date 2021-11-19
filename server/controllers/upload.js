const fs = require('fs');
const asyncHandler = require('express-async-handler');
const cloudinary = require('../utils/cloudinary');

exports.imageUpload = asyncHandler(async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, 'Images');

  const urls = [];
  const files = req.files;
  for (const file of files) {
    const { path } = file;
    const newPath = await uploader(path);
    urls.push(newPath);
    fs.unlinkSync(path);
  }

  res.status(200).json({
    message: 'images uploaded successfully',
    data: urls,
  });
});
