const ResponseHandler = require("../Controller/ResHandler");
const fs=require("fs");
// 
const {
  Create,
  getAll,
  remove,
  update,
  getOne,
  getProductByCategory,
  adminGetAll,
} = require("../entity/Products");
const auth = require("../middleware/Auth");
const upload = require("../utils/UploadImg");
const CheckImageSize = require("../utils/CheckImgSize");
const AdminCheck = require("../middleware/AdminCheck");

const router = require("express").Router();
const imgPath = 'images/1670859279175-1671172076075.jpg'

router.get("/img", (req,res)=>{
  console.log(CheckImageSize("1670859279175-1671172076075.jpg"))
  // let imgInfo = fs.statSync(imgPath)
  // let fileSize = imgInfo.size
  // let fileSizeMB = imgInfo.size / (1024 * 1024)
  // console.log('File size in kb:' + fileSize)
  // console.log('File size in mb:' + fileSizeMB)
  // console.log(req.file)
  // for(let i in req.files){
  //   console.log(req.files[i])
  // }
  // fs.unlink("images/" + req.file.filename, (err) => {
  //   if (err) {
  //       throw err;
  //   }

//     console.log("Delete File successfully.");
// });
  res.send("Uploaded....")
})
router.post("/products",AdminCheck,upload.array("img",5), ResponseHandler(Create));
router.patch("/products/remove/:id", AdminCheck, ResponseHandler(remove));
router.patch("/products/update/:id",AdminCheck,upload.array("img",5), ResponseHandler(update));
router.get("/admin/products",AdminCheck, ResponseHandler(adminGetAll));


// user
router.get("/products", ResponseHandler(getAll));
router.get("/products/:id", ResponseHandler(getOne));
router.get("/products/category/:id", ResponseHandler(getProductByCategory));

module.exports = router;
