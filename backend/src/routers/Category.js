const ResponseHandler = require("../Controller/ResHandler");
const fs = require("fs");
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

router.post("/category", upload.array("img", 1), ResponseHandler(Create));
router.get("/category", ResponseHandler(getAll));
router.get("/category/:id", ResponseHandler(getOne));
router.patch("/category/remove/:id", auth, ResponseHandler(remove));
router.patch(
  "/category/update/:id",
  upload.array("img", 5),
  ResponseHandler(update)
);

module.exports = router;
