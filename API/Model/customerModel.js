const mongoose=require('mongoose')
const userScheme=new mongoose.Schema({
    email:{type:String,required:true}
    
});
const Customer=mongoose.model("user",userScheme);
module.exports=Customer;