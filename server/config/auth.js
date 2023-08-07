const jwt=require('jsonwebtoken')
const {verify} = require("jsonwebtoken");

const auth=async (req,res,next)=>{
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // console.log(bearerToken)

        try {
            const verify=await jwt.verify(bearerToken,'secret')
            next()
        }catch (e) {
            res.status(403).json({
                message:"token is invalid"
            })
            return next(e)
        }


    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

module.exports=auth
