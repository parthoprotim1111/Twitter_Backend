const { Tweet } = require('../models');
const CrudRepository = require('./crud-repository');




class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet)
    }

    async getAllTweets() {
        try {
            const tweet = await Tweet.find();
            return tweet;

        } catch (error) {
            console.log(error);
            throw error;

        }

    }

    async getTweet(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;

        } catch (error) {
            console.log(error);
            throw error;

        }

    }

    async delTweet(data) {
        try {
            const tweet = await Tweet.deleteOne(data);
            return tweet;

        } catch (error) {
            console.log(error);
            throw error;

        }

    }


}


module.exports = TweetRepository;