const express = require('express')
const router = express.Router()

const {getAllProducts, postProduct, getIndividualProduct } = require("../controller/productController")

//get all products frm db
router.get("/", getAllProducts)

//get product of particular id
router.get("/:id", getIndividualProduct)

router.post("/", postProduct)

module.exports = router