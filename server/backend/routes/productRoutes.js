const express = require('express')
const router = express.Router()

const {getAllProducts, postProduct, getIndividualProduct, getItems } = require("../controller/productController")

//get all products frm db
router.get("/", getAllProducts)

//get product of particular id
router.get("/:id", getIndividualProduct)

//get all earings
router.get("/all/:type", getItems)
router.post("/", postProduct)


module.exports = router