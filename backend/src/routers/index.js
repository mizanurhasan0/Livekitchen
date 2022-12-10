const router=require("express").Router();
const routeUser=require("./Users")
const routeCart=require("./Carts")
const routerProduct=require("./Products")

const allRouters=[
    routeUser,
    routeCart,
    routerProduct
]

router.use("/",allRouters);

module.exports=router;