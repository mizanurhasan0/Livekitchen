const ResponseHandler = require("../Controller/ResHandler");
const fs=require("fs");
// 
const {
  Create,
  getAll,
  remove,
  update,
  getOne,
} = require("../entity/Category");
const auth = require("../middleware/Auth");
const upload = require("../utils/UploadImg");
const CheckImageSize = require("../utils/CheckImgSize");

const router = require("express").Router();

router.post("/category",upload.single("img"), ResponseHandler(Create));
router.get("/products", ResponseHandler(getAll));
router.get("/products/:id", ResponseHandler(getOne));
router.patch("/products/remove/:id", auth, ResponseHandler(remove));
router.patch("/products/update/:id",upload.array("img",5), ResponseHandler(update));

module.exports = router;
