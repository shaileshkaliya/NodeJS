const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../Controller/Products');

router.route("/").get(getAllProducts)

module.exports = router;