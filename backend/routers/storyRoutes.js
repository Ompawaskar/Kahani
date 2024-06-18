const express = require('express')
const {getStories,getStory,createStory,answerQuestion} = require('../controllers/storyControllers')

const router = express.Router()

// All stories
router.get('/all-stories',getStories)

// Single story
router.get('/:id',getStory)

//Create Story
router.post('/',createStory)

//Answer Question
router.post('/question',answerQuestion)

module.exports = router