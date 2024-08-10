const mongoose = require('mongoose');
const {Schema} = mongoose;

const hashSchema = new Schema({
    text:{
        type: String,
        required: true,
        unique: true
    },
    tweets:[
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ]

})


const Hashtag = mongoose.model('HashTag',hashSchema);

module.exports = Hashtag;