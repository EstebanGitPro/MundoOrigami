const { Router}=require("expres");

module.exports=funtion({UserController})
{
    const router =Router();

    router.get('/',UserController.sayhello);

    return router;
};