const { userRepository } = require('../repositories')


const userRepo = new userRepository();

async function create(data) {

    try {
        const user = await userRepo.create(data);
        return user;
    } catch (error) {
        throw error;

    }


}