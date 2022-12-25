const fs = require("fs");
const DeleteImages = require("./DeleteImages");

function CheckImageSize(req) {
    let images = [];
    for (let i in req.files) {
     
      if(req.path.replace("/","").toString()==="products"){
        
         imgInfo = fs.statSync(
          req.files[i].destination  + req.files[i].filename.toString()
        );
      }else if(req.path.replace("/","").toString()==="category"){
         imgInfo = fs.statSync(
          req.files[i].destination + req.files[i].filename.toString()
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
