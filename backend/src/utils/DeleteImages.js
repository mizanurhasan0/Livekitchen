const fs = require("fs");
const db=require("../dataBase/index.js")

const DeleteImages =async (req,tableName) => {
  const folder=req.path.replace("/","");
  if (!req.params.id) {
    for (let i in req.files) {
      if(folder==="products"){

        fs.unlink(`images/${folder}/` + req.files[i].filename, (err) => {
          if (err) {
            throw err;
          }
        });
     }else if(folder==="category"){
      fs.unlink(`images/${folder}/` + req.files[i].filename, (err) => {
        if (err) {
          throw err;
        }
      });
     }

    
    }
  }else{
    try {
      const newInstance =await db.findOne({
        table: tableName.toLowerCase(),
        reqBody: { body: { _id: req.params.id } },
      });
      if (!newInstance) throw new Error("Images can't deleted!")
      for (let i in newInstance.images) {
        fs.existsSync(`images/${tableName}/`+newInstance?.images[i]) &&
        fs.unlink(`images/${tableName}/` + newInstance?.images[i], (err) => {
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
