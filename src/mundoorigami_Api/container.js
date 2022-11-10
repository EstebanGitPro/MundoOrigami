const { asClass, createContainer, asFuntion, asValue}= require('awilix');

const StarUp= require('./startup');
const Server= require('./server');
const container = createContainer();
container.register({
    app: asClass(StarUp).classic.singleton(),
    server:asClass(Server).singleton()
})

module.exports =container;