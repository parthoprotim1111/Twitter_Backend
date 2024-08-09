const mongoose = require('mongoose');
const db = require('./server-config')

const connect = async () => {
    await mongoose.connect(db.DB)
    
}

module.exports = connect;