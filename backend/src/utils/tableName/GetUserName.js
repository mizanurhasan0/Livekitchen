
const GetUserName=(req,res,next)=>{
    try {
        req.table="users"
        next();
    } catch (error) {
        console.log(error)
    }
}

module.exports=GetUserName;