const {Router}=require('express')

module.exports=funtion({UserRoutes})
{
    const router = Router();
    const apiRoute=Router();

    apiRoute.use(cors())
    .use(bodyParser.json())
    .use(compremssion);

    apiRoute.use("/user",UserRoutes);
    router.use("/api",apiRoute );
    return router;

}