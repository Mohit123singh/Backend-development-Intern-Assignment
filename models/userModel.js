const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please include the name']
    },
    email:{
        type:String,
        required:[true,'Please include an email'],
        unique:true,
    },
    age:{
        type:Number,
        required:[true,'Please include an age']
    }

},{
    timestamps:true,
})

const userModel=mongoose.model('User',userSchema);
module.exports=userModel;