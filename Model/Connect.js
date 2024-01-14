const mongoose = require('mongoose');

const connectDB = (uri) => {
    console.log("Connected Database Successfully ! ");
    return mongoose.connect(uri);
}

module.exports = connectDB;
