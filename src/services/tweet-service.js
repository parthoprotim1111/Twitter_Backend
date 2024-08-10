const { tweetRepository, tagRepository } = require('../repository');



class TweetService {
    constructor() {
        this.tweetRepository = new tweetRepository();
        this.hastagRepository = new tagRepository();

    }

    async create(data) {

        const content = data.content;
        const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag) => tag.substring(1).toLowerCase());

        // storing the tweet
        const tweet = await this.tweetRepository.create(data);


        // storing the hashtag

        let alreadyPresent = await this.hastagRepository.findByName(tags);
        let textOfPresent = alreadyPresent.map(tags => tags.text);

        let newTags = tags.filter(tag => !textOfPresent.includes(tag))

        newTags = newTags.map(tag => {
            return {
                text: tag,
                tweets: [tweet.id]
            }
        })

        await this.hastagRepository.bulkCreate(newTags);
        alreadyPresent.forEach((tag) => {
            tag.tweet.push(tweet.id);
            tag.save();
        });
        return tweet;



    }

    async getTweet(tweetId) {
        console.log(tweetId)
        const tweet = await this.tweetRepository.getTweet(tweetId);
        return tweet;
    }




}



module.exports = TweetService;