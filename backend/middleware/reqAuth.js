const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization)
        return res.status(500).json({ error: 'Auth Token Required' })

    const token = authorization.split(" ")[1];
    try {
        const {_id} = jwt.verify(token, process.env.SECRET);
        console.log(_id);
        req.user = await User.findOne({_id}).select('_id');
        next();
    } catch (error) {
        res.status(500).json({error:"Not Authorized"})
    } 

}

module.exports = requireAuth