const express = require("express");
const router = express.Router();

const multer = require('multer');

const { v4: uuidv4 } = require('uuid');

const{GetUserData,SaveUser,DeleteUserProfile,UpdateUserProfile}=require("../controller/user")

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, '../upload/');
//   },
//   filename: function(req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   }
// });


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload');
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4())
    }
});


const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});



router.get("/getuser",GetUserData)

router.post("/saveuser", upload.single('profileImage'),SaveUser)
   
router.patch("/updateuser/:id",UpdateUserProfile)

router.delete("/deleteuser/:id",DeleteUserProfile)

module.exports = router;