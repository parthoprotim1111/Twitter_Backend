const CrudRepository = require('./crud-repository');
const { User } = require('../models')


class userRepository extends CrudRepository {
    constructor() {
        super(User)

    }

    async signIn(data) {
        try {
            const response = await User.findOne(data);
            return response;

        } catch (error) {
            throw error;
        }

    }

}





module.exports = userRepository;