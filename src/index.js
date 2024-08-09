const express = require('express');
const {serverConfig, dbConfig} = require('./config')
const mongoose = require('mongoose')

const apiRouter = require('./routes')

const app = express();

app.use('/api',apiRouter)

app.listen(serverConfig.PORT, async () => {
    console.log("Successfully started the server on port ",serverConfig.PORT);
    dbConfig()
    console.log("DB connected")
    
})
