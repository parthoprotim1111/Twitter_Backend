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

async function signIn(data) {

    try {
        const email = data.email;
        const password = data.password
        const user = await userRepo.signIn({ email: email });
        if (!user) {
            throw { message: "No user found" }
        }
        if (!user.comparePassword(password)) {
            throw { message: "Incorrect Password" }
        }

        return user;
    } catch (error) {
        throw error;

    }


}

module.exports = {
    signUp,
    signIn
}