const express = require('express');

const productsRouter = require('./products/products.router');

const router = express.Router();

router.use('/products', productsRouter);

module.exports = router;