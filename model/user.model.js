const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({

    name:{
        type:String,
        require: true,
    },
    imageOfUser:{
        type:String
    },
    contactNumber:{
        type:Number,
        unique:1,
        require:true,
    },
    emailUser:{
        type:String,
        trim:true,
        require:true,
        unique:1,
        lowercase:true,
    },
    address:{
        type:String
    }

})

module.exports=mongoose.model("UserSchema",UserSchema)