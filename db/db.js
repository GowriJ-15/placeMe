
const mysql=require('mysql');

const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "gowri",
    database: "student",
    
    });

module.exports=db;