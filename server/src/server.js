// const express = require('express')
import express from 'express' // because of esm package I can use ES5 import syntax
import mongoose from 'mongoose'
// import cors from 'cors'
require('dotenv').config()

const app = express()
// app.use(cors())

// services
import { configureAuth0 } from './services/auth0'

// routes
import { authRoutes } from './routes/authRoutes'
import { publicRoutes } from './routes/publicRoutes'

// models
import { userModel } from './models/users'


// DB connection
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// schema models
userModel()

// auth0 middleware start
configureAuth0(app);
// auth0 middleware end

// protected routes 
authRoutes(app)

// public routes
publicRoutes(app)


// async await can execute without esm  

// async function delayedLogger(...messages) {
//     return new Promise((resolve) => {
//         setImmediate(() => {
//             console.debug(...messages);
//             resolve(true);
//         });
//     });
// }

// async function doLogs() {
//     delayedLogger('2. Then I run next!');
//     console.log('1. I run first!');
//     await delayedLogger('3. Now I run third because I "await"');
//     console.log('4. And I run last!');
// }
// doLogs()

const port = process.env.PORT || 3200
app.listen(port, ()=>{
    console.log("server is listing on port: ", port)
})