const Product = require('../Model/Product');

const getAllProducts = async (req, res) => {

    try {
        const { brand, title, category, sort, select } = req.query;

        const queryObject = {};

        if (brand) {
            queryObject.brand = { $regex: brand, $options: "i" };
        }
        if (title) {                         // title=iPhone
            queryObject.title = { $regex: title, $options: "i" };
        }
        if (category) {                    // category=apple
            queryObject.category = { $regex: category, $options: "i" };
        }
        let apiData = Product.find(queryObject);
        if (sort) {                          // sort=rating, -price ,etc...
            const sortQuery = sort.split(",").join("");
            apiData = apiData.sort(sortQuery);
        }
        if (select) {                      // select=name, company, -price ,etc...
            const selectQuery = select.split(",").join("");
            apiData = apiData.select(selectQuery);
        }

        let page = req.query.page || 1;
        const limit = 3;
        let skip = (page - 1) * limit;
        if (page) {
            apiData = apiData.skip(skip).limit(limit);
        }

        const allData = await apiData;
        res.status(200).json({ allData });
    } catch (error) {
        console.log("Error -> ", error)
        res.status(500).json({ Message: "Not found" })
    }
}
module.exports = { getAllProducts };