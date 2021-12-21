const express = require('express');
const router = express.Router();

const upload = require('../utils/multer');
const { imageUpload } = require('../controllers/upload');

router.post('/upload-images', upload.array('files'), imageUpload);

module.exports = router;
