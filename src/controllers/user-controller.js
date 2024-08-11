const { userService } = require('../services');
const { StatusCodes } = require('http-status-codes')


async function signUp(req, res) {
    try {

        const data = req.body;
        console.log(data);
        const response = await userService.signUp(data);
        return res.status(StatusCodes.OK).json({
            success: true,
            meassage: "Successfully signed up",
            data: { response },
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: true,
            message: "Not able to create user",
            data: {},
            error: error
        })


    }

}

async function signIn(req, res) {
    try {

        const data = req.body;
        console.log(data);
        const response = await userService.signIn(data);
        return res.status(StatusCodes.OK).json({
            success: true,
            meassage: "Successfully signed In",
            data: { response },
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: true,
            message: "Not able to signIn",
            data: {},
            error: error
        })


    }

}



module.exports = {
    signUp,
    signIn

}