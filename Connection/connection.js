const mongoose = require('mongoose');
require('dotenv').config()

const connnection = mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

module.exports = {
    connnection
}
