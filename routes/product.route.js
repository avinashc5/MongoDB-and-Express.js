// Router is to write how the requests should be handled
const express = require("express");
const router = express.Router();

const { getProducts, createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

router.get('/', getProducts);

router.post('/', createProduct);

router.get('/:id', getProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router