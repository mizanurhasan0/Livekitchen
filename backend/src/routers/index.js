const router=require("express").Router();
const routeUser=require("./Users")
const routeCart=require("./Carts")
const routerProduct=require("./Products")

const allRouters=[
    routeUser,
    routeCart,
    routerProduct
]

router.use("/dashboard",allRouters);

module.exports=router;