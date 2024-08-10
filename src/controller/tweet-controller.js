const { tweetService } = require('../service');
const { StatusCodes } = require('http-status-codes')

const twtService = new tweetService();

async function createTweet(req, res) {
    try {

        const data = req.body;
        console.log(data);
        const response = await twtService.create(data);
        return res.status(StatusCodes.OK).json({
            success: true,
            meassage: "Successfully created",
            data: { response },
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: true,
            message: "Not able to create tweet",
            data: {},
            error: error
        })


    }

}

async function getTweet(req, res) {
    try {
        const id = req.params.id;
        const response = await tweetService.getTweet(id);
        return res.status(StatusCodes.OK).json({
            success: true,
            meassage: "Successfully found the tweet",
            data: { response },
            error: {}
        })



    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: true,
            message: "Not able to get the tweet",
            data: {},
            error: error
        })

    }
}



module.exports = {
    createTweet,
    getTweet,

}