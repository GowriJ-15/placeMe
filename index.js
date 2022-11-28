const cors = require("cors");
const express =require('express');
const mysql=require('mysql');
const app=express();
app.use(express.json());
const authRouter = require('./routes/auth')
app.use(cors());
const db=mysql.createConnection({
user: "root",
host: "localhost",
password: "gowri",
database: "student",

});


app.use('/auth',authRouter);

app.post('/register',(req,res)=>{
    
    const  Name= req.body.Name
    const  Email= req.body.Email
    const  Password= req.body.Password
    const  Admno= req.body.Admno
    const  CGPA= req.body.CGPA
    const  Backlog= req.body.Backlog


    db.query(
        "INSERT INTO signup(Name,Email,Password,Admno,CGPA,Backlog) VALUES(?,?,?,?,?,?)",
    [Name,Email,Password,Admno,CGPA,Backlog],
    (err, result) => {
        console.log(err);
         res.status(201).json({message:`${Name} registered`,success:true})
    }
    );
});

// app.post('/loginnew', (req, res)=> {
//     const  Email= req.body.Email
//     const  Password= req.body.Password
//     db.query(
//         "SELECT * FROM signup WHERE Email = ? AND Password = ?",
//     [Email,Password],
//     (err, result) => {
        
//         if(err) {
//             res.send({err: err});
//         }
        
//             if(result.length > 0) {
//                 res.send(result)
//             }
//             else{
//                 res.send({message: "Wrong username/password"});
//             }
//         }
    
//     );

// });
app.listen(3001, () => {
    console.log("running server");
});