const express = require('express');
const router = express.Router();

const upload = require('../utils/multer');
const { imageUpload } = require('../controllers/upload');

router.route('/upload-images', upload.array('image'), imageUpload);

module.exports = router;
