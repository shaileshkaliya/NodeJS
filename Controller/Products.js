const Product = require('../Model/Product');

const getAllProducts = async(req, res) => {
    const allData = await Product.find({});
    res.status(200).json({allData});
}

const getAllProductsTest = async(req, res) => {
    const allData = await Product.find({});
    res.status(200).json({allData});
}

module.exports = {getAllProducts, getAllProductsTest};