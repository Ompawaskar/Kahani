const mongoose = require('mongoose')

const Schema = mongoose.Schema

const storySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    story:{
        type:String,
        required:true
    },
    images:{
        type:[String]
    },
    user_id:{
        type:String,
        required:true
    },
    upvotes:{
        type:Number,
        required:true
    },
    downvotes:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model('story',storySchema);
