import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("multer111111")
      cb(null, '/public/temp')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })

  export const upload = multer({
    storage
  })