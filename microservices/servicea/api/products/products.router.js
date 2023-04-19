const router = require('express').Router();
const controller = require('./products.controller');

router.get('/:id', controller.getById);

module.exports = router;