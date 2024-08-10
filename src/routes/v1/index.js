const express = require('express');
const router = express.Router();
const tweetRoute = require('./tweet-route')

const { info_contorller } = require('../../controller')

router.get('/', info_contorller)
router.use('/tweets', tweetRoute)

module.exports = router