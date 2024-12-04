const jwt = require('jsonwebtoken');

 function authenticateToken (req, res, next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:'you need to login first' , path:'/login'})
    }
    try{
        let decode = jwt.verify(token , 'key')
        req.user = decode;
        next()
    }catch(err){res.json(err)}

}
module.exports = authenticateToken