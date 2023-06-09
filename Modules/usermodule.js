const mongo =require("../connect");
const { ObjectId } = require('mongodb');
const userModel= require("../models/usermodel.js");
module.exports.getUserData= async (req,res,next)=>{

    try{
       
        const apiresponse= await userModel.find({});
       
       
    return  res.status(200).send(apiresponse);
next();
    }catch(error){
        console.log(error);
    }
    
};

module.exports.deleteuserdata = async (req,res,next)=>{
   
    try {
      
       const deletedata = await userModel.deleteOne({ _id: new ObjectId(req.params.id) });
       res.send(deletedata)
   } catch (err) {
       console.error("deletion error",err);
       res.status(500).send(err)
   }
}