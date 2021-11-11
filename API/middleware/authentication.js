const jwt=require('jsonwebtoken')
function Auth(req,res,next){
    const verify=jwt.verify(req.cookies.token,process.env.jwt_PASSWORD)
    console.log(verify)
    next()
}

module.exports=Auth;