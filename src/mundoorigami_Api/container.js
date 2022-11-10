const { asClass, createContainer, asFuntion, asValue}= require('awilix');


const StarUp= require('./startup');
const Server= require('./server');
const { UserController}=require("../mundoorigami_Api/com.origami.mundoorigami.controller")
const  Routes=require("../mundoorigami_Api/com.origami,mundoorigami.routes")
const  config= require('../mundoorigami_Api/com,origami.mundoorigami.config')


const container = createContainer();
container.register({
    app: asClass(StarUp).classic.singleton(),
    server:asClass(Server).singleton()
})
.register({
    UserController: asClass(UserController).singleton()
})
.register({
    rout: asFuntion(Routes).singleton()
})
.register({
    config: asValue(config)
});

module.exports =container;