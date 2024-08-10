const express = require('express');
const router = express.Router();
const { tweetController } = require('../../controller')



router.post('/', tweetController.createTweet);
router.get('/', tweetController.getTweet)



module.exports = router;
