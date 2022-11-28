const db = require('../db/db')


const login = async(req,res)=>{
    const {email,password} = req.body;

   const quer1 = ' select * from signup where Email = ?';
   await db.query(quer1,[email],(error,result)=>{
    if(error) throw error;
    if(result.length>0){
        if(result[0].Password == password){
            res.status(201).json({message:'logged in',data:result,success:true});
           }
           else{
            res.status(400).json({message:"invalid creds",success:false});Loading
           }
    }
    else{
    res.status(400).json({message:"invalid creds",success:false});Loading
   }
   }) 

}

const register = async (req,res)=>{
    

    const {name,email,password,admno,cgpa,backlog} = req.body
     
    
    
        db.query(
            "INSERT INTO signup(Name,Email,Password,Admno,CGPA,Backlog) VALUES(?,?,?,?,?,?)",
        [name,email,password,admno,cgpa,backlog],
        (err, result) => {
            console.log(err);
             res.status(201).json({message:`${name} registered`,success:true})
        }
        );
    
}

module.exports = {login,register};