const Product = require('../Model/Product');

const getAllProducts = async(req, res) => {

    const { brand, title, category, sort} = req.query;

    const queryObject = {};

    if (brand) {
        queryObject.brand = {$regex:brand, $options:"i"};
    }
    if (title) {
        queryObject.title = {$regex:title, $options:"i"};
    }
    if (category) {
        queryObject.category = {$regex:category, $options:"i"};
    }
    let apiData = Product.find(queryObject);
    if(sort){
        const sortQuery = sort.replace(",", "");
        apiData = apiData.sort(sortQuery);
    }

    const allData = await apiData;
    res.status(200).json({allData});
}

const getAllProductsTest = async(req, res) => {
    const allData = await Product.find(req.query);
    res.status(200).json({allData});
}
module.exports = {getAllProducts, getAllProductsTest};