const fs = require("fs");
const db=require("../dataBase/index.js")
const PATH="images/"

const DeleteImages =async (req, tableName) => {
  console.log(req.params.id)
  if (!req.params.id) {
    for (let i in req.files) {
      fs.unlink("images/" + req.files[i].filename, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  }else{
    try {
      const newInstance =await db.findOne({
        table: tableName.toLowerCase(),
        reqBody: { body: { _id: req.params.id } },
      });
      if (!newInstance) throw new Error("Images can't deleted!")
      for (let i in newInstance.images) {
        fs.existsSync(PATH+newInstance?.images[i]) &&
        fs.unlink(PATH + newInstance?.images[i], (err) => {
          if (err) {
            throw new Error("Something went wrong"+err);
          }
        })
      }
    } catch (error) {
      throw new Error("Something went wrong"+error)
    }
     
   
  }
};
module.exports = DeleteImages;
