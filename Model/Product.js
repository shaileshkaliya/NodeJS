const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        default: 'https://e1.pxfuel.com/desktop-wallpaper/117/679/desktop-wallpaper-best-youtube-thumbnail-backgrounds-vs-thumbnail.jpg'
    }
})

module.exports = mongoose.model("Product", productSchema)