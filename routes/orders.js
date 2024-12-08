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
router.put('/api/v1/orders/:id', authMiddleware, ordersController.updateOrder);

module.exports = router;
