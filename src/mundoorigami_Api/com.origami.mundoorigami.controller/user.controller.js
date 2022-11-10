class UserController{

    sayHello(req,res)
    {
        return res.send({message: "hello word"})
    }
}
moduler.exports =UserController