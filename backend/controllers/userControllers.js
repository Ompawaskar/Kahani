const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

//Login User
const LoginUser = async (req,res) => {
    const {email,password} = req.body

    try {
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.status(200).json({user,token})
    } catch (error) {
       res.status(500).json({error:error.message}) 
    }
    
}

//SignUp User
const SignUpUser = async (req,res) => {
    const {email,password,username} = req.body
    
    try {
        const user = await User.signup(email,password,username);
        const token = createToken(user._id)

        res.status(200).json({email,username,token})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {SignUpUser , LoginUser}