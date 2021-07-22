const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    imageUrl : {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("product", productSchema);

module.exports = Product