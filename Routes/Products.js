const express = require('express');
const router = express.Router();
const {getAllProducts, getAllProductsTest} = require('../Controller/Products');

router.route("/").get(getAllProducts)
router.route("/testing").get(getAllProductsTest)

module.exports = router;