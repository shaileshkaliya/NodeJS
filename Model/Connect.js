const mongoose = require('mongoose');

// const uri = 'mongodb+srv://shaileshkaliya124:yiBL8NoMmnmPZBdz@ecommerce.aoucz3f.mongodb.net/Ecommerce?retryWrites=true&w=majority'
const connectDB = (uri) => {
    console.log("Connected Database Successfully ! ");
    return mongoose.connect(uri);
}

module.exports = connectDB;