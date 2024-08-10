const { Hashtag } = require('../models');
const CrudRepository = require('./crud-repository')



class HashRepository extends CrudRepository {
    constructor() {
        super(Hashtag)
    }

    async bulkCreate(data) {
        try {
            const hash = await Hashtag.insertMany(data);
            return hash;
        } catch (error) {
            console.log(error);
            throw error;

        }
    }


    async findByName(text) {
        try {
            const hash = await Hashtag.find({
                text: text
            })
            return hash;
        } catch (error) {

        }
    }

    async getAllTags() {
        try {
            const hash = await Hashtag.find();
            return hash;

        } catch (error) {
            console.log(error);
            throw error;

        }

    }

    async getTag(id) {
        try {
            const hash = await Hashtag.findById(id);
            return hash;

        } catch (error) {
            console.log(error);
            throw error;

        }

    }

    async delTag(data) {
        try {
            const hash = await Hashtag.deleteOne(data);
            return hash;

        } catch (error) {
            console.log(error);
            throw error;

        }

    }


}


module.exports = HashRepository;