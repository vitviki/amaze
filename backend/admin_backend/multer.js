import Multer from "multer";

const storage = Multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const multer = Multer({ storage });

export default multer;
