const ResponseHandler = require("../Controller/ResHandler");
const fs=require("fs");
// 
const {
  Create,
  getAll,
  remove,
  update,
  getOne,
} = require("../entity/Products");
const auth = require("../middleware/Auth");
const upload = require("../utils/UploadImg");

const router = require("express").Router();

router.post("/img",upload.array("img",5), (req,res)=>{
  console.log(req.file)
  for(let i in req.files){
    console.log(req.files[i])
  }
  // fs.unlink("images/" + req.file.filename, (err) => {
  //   if (err) {
  //       throw err;
  //   }

//     console.log("Delete File successfully.");
// });
  res.send("Uploaded....")
})
router.post("/products",upload.array("img",5), ResponseHandler(Create));
router.get("/products", ResponseHandler(getAll));
router.get("/products/:id", ResponseHandler(getOne));
router.patch("/products/remove/:id", auth, ResponseHandler(remove));
router.patch("/products/update/:id", ResponseHandler(update));

module.exports = router;
