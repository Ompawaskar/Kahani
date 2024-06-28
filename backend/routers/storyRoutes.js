const express = require('express')
const {getStories,getStory,createStory,answerQuestion,deleteStory,handleUpvote,handleDownvote,handleStatusChange} = require('../controllers/storyControllers')
const requireAuth = require('../middleware/reqAuth')

const router = express.Router()
router.use(requireAuth);

// All stories
router.get('/all-stories',getStories)

// Single story
router.get('/:id',getStory)

//Create Story
router.post('/',createStory)

//Upvotes
router.patch('/:storyId/upvote',handleUpvote)

//Downvotes
router.patch('/:storyId/downvote',handleDownvote)

//Status Change
router.patch('/:storyId/status',handleStatusChange)

//Delete Story
router.delete('/:id',deleteStory)

//Answer Question
router.post('/question',answerQuestion)

module.exports = router