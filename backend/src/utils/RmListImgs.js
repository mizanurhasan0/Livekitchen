const fs = require("fs");

const RmListImgs =  (images, folderName) => {

  for (let i in images) {
    fs.unlink(`images/${folderName}/` + images[i], (err) => {
      if (err) {
        throw err;
      }
    });
  }
};
module.exports = RmListImgs;
