const multer = require("multer");
const path = require("path");

const UPLOAD_FOLDER = "./images/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName + fileExt);
  },
});

var upload = multer({
  storage: storage,
 limits:{fileSize:100000000},
 fileFilter:(req,file,cb)=>{
    if(file.fieldname==="img"){
        if(file.mimetype==="image/png"|| file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"){
            cb(null,true)
        }else{
            cb(new Error("only jpeg,png and jpg!! "))
        }
    }
 }
});
module.exports = upload;
