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
    }
},{timestamps:true});

module.exports = mongoose.model('story',storySchema);
