const express = require('express')
const {SignUpUser , LoginUser} = require('../controllers/userControllers')

const router = express.Router();

// SignUp Route
router.post('/signup',SignUpUser)

//Login Route
router.post('/login',LoginUser)

module.exports = router
