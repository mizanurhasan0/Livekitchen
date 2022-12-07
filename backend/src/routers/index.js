const router=require("express").Router();
const routeUser=require("./Users")

const allRouters=[
    routeUser
]

router.use("/",allRouters);

module.exports=router;