require("dotenv").config()

const PRODUCTION= require('../environments/production');
const DEVELOPMENT= require('../environments/developments');
const QA= require('../environments/qa');
const {NODE_ENV} =process.env;

let currentEnv =DEVELOPMENT;

if(NODE_ENV =="production"){
    currentEnv=PRODUCTION;
}
else if(NODE_ENV==qa)
{
    currentEnv=QA;
}

module.exports =currentEnv;