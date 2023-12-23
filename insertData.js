require("dotenv").config();
const connect = require('./Model/Connect');
const Product = require('./Model/Product');
const productJson = require('./products.json');

const start = async() => {
    try {
        console.log("Success...!");
        await connect(process.env.mongoURI);
        await Product.create(productJson);
    } catch (error) {
        console.log(error);
    }
}

start();