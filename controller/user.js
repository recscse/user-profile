const UserSchema=require("../model/user.model")
const path = require('path');
const fs = require('fs');

exports.SaveUser=async(req,res,next)=>{
    try{
      const { name,contactNumber,emailUser,address} =req.body;
      const imageOfUser =  req.file.path.replace("\\" ,"/") // const imageOfUser=req.file.path
  
         let newdata=new UserSchema({
          name, contactNumber,emailUser,address ,imageOfUser
         })

         let data = await newdata.save()

         return res.status(200).json({
             status:true,
             message:"Data is Saved!!!"
         })
         
    }
    catch(err){
        return res.status(400).json({
            status:false,
            message:err.message
        })
    }
}

exports.GetUserData=async(req,res,next)=>{
    try{
        let finddata=await UserSchema.find({})
        if(finddata) {
            return res.json({
                data:finddata
            })
        }
        else{
            return res.json({
                message:"No data Found"
            })
        }
    }
    catch(err){
        return res.status(400).json({
            status:false,
            message:err.message
        })
    }
}
exports.UpdateUserProfile = async (req, res, next) => {
    try {
      const id = req.params.id;
      const find_data = await UserSchema.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );
      return res.status(201).json({
        status: true,
        data: find_data,
        message: "Updated user profile",
      });
    } catch (err) {
      return res.status(400).json({ message: err.message, status: false });
    }
  };
exports.DeleteUserProfile = async (req, res, next) => {
    try {
      const id = req.params.id;
      const find_data = await UserSchema.findByIdAndDelete(id);
      
      

      return res.status(200).json({
        status: true,
        data: find_data,
        message: "Profile   is deleted",
      });
    } catch (err) {
      return res.status(400).json({ message: err.message, status: false });
    }
    
  };

  const clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log(err));
};