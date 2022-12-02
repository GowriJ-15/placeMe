const cors = require("cors");
const express =require('express');
//const bodyParser=require("body-parser");
const mysql=require('mysql');
const app=express();
//app.use(bodyParser.urlencoded({extened: false}))
//app.use(bodyParser.json());
app.use(express.json());
const authRouter = require('./routes/auth')
const ccgpaRouter=require('./routes/ccgpa')
app.use(cors());
const db=mysql.createConnection({
user: "root",
host: "localhost",
password: "gowri",
database: "student",

});



app.use('/auth',authRouter);
app.use('/ccgpa',ccgpaRouter);
app.listen(3001, () => {
    console.log("running server");
});