var express = require('express');
var router = express.Router();
const User=require('../Model/userModel')
const bcrypt=require('bcrypt');
const { validate } = require('../Model/userModel');
const { UnsupportedMediaType } = require('http-errors');
const jwt=require('jsonwebtoken')
/* GET users listing. */
const data={
  name:"malus",
  email:"l@gmail.com",
  password:"65grgc"
}
router.get('/', async function(req, res, next) {
  const salt=await bcrypt.genSalt()
    const val=await bcrypt.hash(data.password,salt)
   
    const userdata=new User({
      email:"g@gmail.com",passwordHash:val
    })
    const saveUser= await userdata.save()
    const token=jwt.sign({user:saveUser._id},process.env.jwt_PASSWORD)
   
   
  try{
    if(!data.name || !data.email || !data.password)
    return res.status(400).send("enter required field")
    if(data.password.length <3)
    return res.status(400).send("not valid")
    
   
    ///
    res.cookie("token",token,{
      
    }).send("ifigfkbjiht")
    console.log(req.cookies)
    
  }catch(err){
    console.error(err)
    res.status(500).send("oirjigr")
  }
});
router.get('/login',async(req,res)=>{
  const emails="g@gmail.com"
  const userEmail=await User.findOne({emails})
  
  

})
router.get('/logout',async(req,res)=>{
  res.cookie("token","",{
    httpOnly:true,
    expires:new Date(0)
  }).send("logout")
  

})
module.exports = router;
