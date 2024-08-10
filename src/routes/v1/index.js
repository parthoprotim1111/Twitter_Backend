const express = require('express');
const router = express.Router();
const tweetRoute = require('./tweet-route')
const userRoute = require('./user-route')

const { info_contorller } = require('../../controllers')

router.get('/', info_contorller)
router.use('/tweets', tweetRoute)
router.use('/user', userRoute)

module.exports = router