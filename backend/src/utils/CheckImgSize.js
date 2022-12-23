const fs = require("fs");
const DeleteImages = require("./DeleteImages");
const imgPath = "images";

function CheckImageSize(req) {
  console.log(req.path.replace("/",""))
    let images = [];
    for (let i in req.files) {
      let imgInfo;
      if(req.path.replace("/","")==="products"){

         imgInfo = fs.statSync(
          imgPath + `/products/` + req.files[i].filename.toString()
        );
      }else if(req.path.replace("/","")==="category"){
         imgInfo = fs.statSync(
          imgPath + `/category/` + req.files[i].filename.toString()
        );
      }
      let fileSizeMB = imgInfo.size / (1024 * 1024);
      if (fileSizeMB <= 1) {
        images.push(req.files[i].filename);
      } else {
        // Delete after failing request
        DeleteImages(req);
        return { check: false, images: [], status: 400 };
      }
    }

    return { check: true, images: images,status:200 };
 
}
module.exports = CheckImageSize;
