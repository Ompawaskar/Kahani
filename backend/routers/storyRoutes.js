const express = require('express')
const {getStories,getStory,createStory,answerQuestion,deleteStory} = require('../controllers/storyControllers')
const requireAuth = require('../middleware/reqAuth')

const router = express.Router()
router.use(requireAuth);

// All stories
router.get('/all-stories',getStories)

// Single story
router.get('/:id',getStory)

//Create Story
router.post('/',createStory)

//Delete Story
router.delete('/:id',deleteStory)

//Answer Question
router.post('/question',answerQuestion)

module.exports = router