const db = require('../db/db')


const ifUserEligible = async (req,res)=>{
    const {id} = req.params;

    let query="Select cName from company,signup where signup.CGPA>=company.cCGPA AND signup.Admno=?"
    await db.query(query,[id] ,(err,result)=>{
        if(err)
        throw err;
    return res.status(201).json({message:'displayed',data:result,success:true});

    })
}


module.exports={ifUserEligible}