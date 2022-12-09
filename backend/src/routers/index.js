const router=require("express").Router();
const routeUser=require("./Users")
const routeCart=require("./Carts")

const allRouters=[
    routeUser,
    routeCart
]

router.use("/",allRouters);

module.exports=router;