const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.post('/orders', ordersController.addOrder);
router.get('/orders', ordersController.getAllOrders);
router.get('/orders/:id', ordersController.getOrder);

module.exports = router;
