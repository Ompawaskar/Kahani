const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const storyRoutes = require('./routers/storyRoutes')
const userRoutes = require('./routers/userRoutes')
const cors = require('cors')

// Create express app
const app = express()

//Middlewares
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from this origin
}));
app.use(express.json())

//Set Routes
app.use('/api/user',userRoutes)
app.use('/api/kahani',storyRoutes);

mongoose.connect(process.env.MONGODB_URI).
    then((response) => {
        console.log("Connected to DB");
        app.listen(process.env.PORT, () => {
            console.log("Listening on port 4000");
        })
    }).catch((err) => {
        console.log(err);
    })
