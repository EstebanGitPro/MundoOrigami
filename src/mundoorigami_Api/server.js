const express =require("express");
const { config } = require("process");
const { start } = require("repl");

class Server{

    constructor({config,router})
    {
            this._config=config;
            this._router=router;
            this._express = express();
            this._express.use(router);
    }


start()
{
    return new Promise ((resolve, reject)=> {
        const http  =this._express.listen(config.PORT, ()=> {
            const{port} = http.address();
            console.log("aplication running on port "+ port);
            resolve();
        });
    });

}

}

module.exports=Server;
