const { Like } = require('../models');
const CrudRepository = require('./crud-repository');

class likeRepository extends CrudRepository {
    constructor() {
        super(Like)
    }

}


module.exports = likeRepository;