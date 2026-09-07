const notes=require('../models/data.js');
const getNotes=(req,res)=>{
    res.status(200).send(notes);
} 
module.exports={getNotes};