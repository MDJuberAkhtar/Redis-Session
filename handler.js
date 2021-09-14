'use strict';
const serverless = require('serverless-http');
const express = require('express');
const session = require('express-session');
const connectRedis = require('connect-redis');
const cors = require('cors')
const BodyParse = require('body-parser');
const multer = require('multer');

const app = express();

app.use(cors())
app.use(express.json())
app.use(BodyParse.urlencoded({extended: true}))
app.use(multer().array())

const RedisStore = connectRedis(session)

const redisClient = require('./config/MyRedisPool');

//Configure session middleware
app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: 'secret$%^134',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // if true only transmit cookie over https
        httpOnly: false, // if true prevent client side JS from reading the cookie 
        maxAge: 1000*60*24 // session max age in miliseconds
    }
}))

const getUser = require('./routes/apiUser');
app.use('/api', getUser)



module.exports.handler = serverless(app);