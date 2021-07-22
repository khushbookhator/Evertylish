const Product = require("../models/product")

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).lean().exec()
        res.status(200).json(products)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

const postProduct = async (req, res) => {
    const {} = req.body
    try{
        const newProduct = new Product(req.body)
        await newProduct.save()
        if (newProduct) {
            res.status(201).json({ message: 'Product added successfully' });
        } else {
            res.status(500).json({ error: 'Failed to add new Product' });
        }
    }
    catch (error){
    console.log(err);
    res.status(404).json({ error: 'Sorry! something went wrong' });
    }
}

const getIndividualProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = {
    getAllProducts,
    postProduct,
    getIndividualProduct
}