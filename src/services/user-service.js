const { userRepository } = require('../repositories')


const userRepo = new userRepository();

async function signUp(data) {

    try {
        const user = await userRepo.create(data);
        return user;
    } catch (error) {
        throw error;

    }


}

module.exports = {
    signUp
}