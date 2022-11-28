const cors = require("cors");
const express =require('express');
const mysql=require('mysql');
const app=express();
app.use(express.json());
app.use(cors());
const db=mysql.createConnection({
user: "root",
host: "localhost",
password: "gowri",
database: "student",

});


app.post('/cregister',(req,res)=>{
    
    const cName=req.body.cName
    const cID=req.body.cID
    const cCGPA=req.body.cCGPA


    db.query(
        "INSERT INTO company(cName,cID,cCGPA) VALUES(?,?,?)",
    [cName,cID,cCGPA],
    (err, result) => {
        console.log(err);
    }
    );
});


app.listen(3001, () => {
    console.log("running server");
});