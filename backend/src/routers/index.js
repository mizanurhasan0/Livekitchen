const router=require("express").Router();
const routeUser=require("./Users")
const routeCart=require("./Carts")
const routerProduct=require("./Products")
const routerCategory=require("./Category")

const allRouters=[
    routeUser,
    routeCart,
    routerProduct,
    routerCategory
]

router.use("/dashboard",allRouters);

module.exports=router;