class CrudRepository {
    constructor(model) {
        this.model = model;

    }

    async create(data) {
        try {
            console.log(data);
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong while creating");
            throw error;

        }

    }

    async destroy(id) {
        try {
            console.log(id);
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong while deleting");
            throw error;

        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log("Something went wrong while getting the data");
            throw error;

        }

    }

    async getAll() {
        try {
            const result = await this.model.find();
            return result;
        } catch (error) {
            console.log("Something went wrong while getting all the data");
            throw error;

        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, { new: true });
            return result;
        } catch (error) {
            console.log("Something went wrong while updating the data");
            throw error;

        }
    }



}

module.exports = CrudRepository;