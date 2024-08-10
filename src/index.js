const express = require('express');
const { serverConfig, dbConfig } = require('./config')
const mongoose = require('mongoose')
const { tweetRepository } = require('./repositories')

const apiRoute = require('./routes');
// const {Tweet} = require('./models');

const app = express();
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoute)

app.listen(serverConfig.PORT, async () => {
    console.log("Successfully started the server on port ", serverConfig.PORT);
    dbConfig()
    console.log("DB connected")

    // Tweet.create({
    //     content: "First Tweet",
    //     likes: 24,
    //     noOfRetweets: 6,

    // })
    // const tweetRepo = new tweetRepository();
    // let tweets = await tweetRepo.delTweet({
    //     "_id": '66b5a2fc27e32cae408108db'
    // });
    // console.log(tweets)


})
