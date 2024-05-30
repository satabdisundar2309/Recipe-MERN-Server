const { User } = require("../Models/User.js")
const jwt = require('jsonwebtoken')
require('dotenv').config()

const Authenticate = async (req,res,next) =>{
    const token = req.header("Auth")
    try {
        if(!token) return res.json({message:"login first"})

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        // console.log("this is decoded data ",decode)

        const id = decode.userId

        let user = await User.findById(id)
 
        if(!user) return res.json({message:"User not exist"})

        req.user = user 
        next();
    } catch (error) {
        res.json({message:error})
    }
}

module.exports = {Authenticate}