const express = require("express");
const router = express.Router();
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + '_' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Uploaded file is neither jpeg nor png'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.IMAGE_SIZE)
  },
  fileFilter: fileFilter
});

router.post('/', upload.single('turdImage'), (req, res, next) => {
  if(req.file){
    res.status(201).json({
      filename: req.file.filename
    });
  } else {
    res.status(400).send();
  }
});

router.delete('/:imagename', (req, res, next) => {
  fs.unlink(`uploads/${req.params.imagename}`, () => {
    res.status(200).json({
        message: 'Turd deleted'
    });
  });
});

module.exports = router;
