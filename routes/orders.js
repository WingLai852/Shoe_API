const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const ordersController = require('../controllers/ordersController');

// Routes voor bestellingen
router.post('/', ordersController.addOrder);
router.get('/', authMiddleware, ordersController.getAllOrders);
router.get('/:id', authMiddleware, ordersController.getOrder);
router.put('/:id', authMiddleware, ordersController.updateOrder);
router.delete('/:id', authMiddleware, ordersController.deleteOrder);

module.exports = router;
