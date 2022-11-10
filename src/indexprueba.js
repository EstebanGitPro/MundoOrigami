const container = require('./mundoorigami_Api/container')

const aplication = container.resolve("app");

application.start().catch(err => {
    console.log(err);
    process.exit();
})

