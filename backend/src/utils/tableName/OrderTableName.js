
const OrderTableName=(req,res,next)=>{
    try {
        req.table="orders"
        next();
    } catch (error) {
        console.log(error)
    }
}
module.exports=OrderTableName;
