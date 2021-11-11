const mongoose=require('mongoose')
const userScheme=new mongoose.Schema({
    email:{type:String,required:true},
    passwordHash:{type:String,required:true}
});
const User=mongoose.model("user",userScheme);
module.exports=User;