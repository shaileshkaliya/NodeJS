const getAllProducts = async(req, res) => {
    res.status(200).json({msg : "I am getALlProducts"});
}

const getAllProductsTest = async(req, res) => {
    res.status(200).json({msg : "I am getALlProductsTest"});
}

module.exports ={getAllProducts, getAllProductsTest};