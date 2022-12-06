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
            res.status(400).json({message:"invalid creds",success:false});//Loading
           }
    }
    else{
    res.status(400).json({message:"invalid creds",success:false});//Loading
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
const companyregister = async (req,res)=>{
  const {cname,cid,ccgpa} = req.body
       
        db.query(
          "INSERT INTO company(cName,cID,cCGPA) VALUES(?,?,?)",
          [cname,cid,ccgpa],
          (err, result) => {
            if(err)throw err;
            return res.status(201).json({message:'company registered',success:true})
          }
        );
    
      
}
const getCompany = async (req,res)=>{
    await db.query('select * from company',(err,result)=>{
        if(err)throw err;
            return res.status(201).json({message:'fetched',data:result})
    })
}
module.exports = {login,register,companyregister,getCompany};