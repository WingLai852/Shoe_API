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
router.post('/api/v1/orders', async (req, res) => {
    try {
      const newOrder = new Order(req.body); // Sla de data op in de database
      await newOrder.save();
  
      res.status(201).json({
        status: 'success',
        data: newOrder,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Kon de bestelling niet opslaan.',
      });
    }
  });

module.exports = router;
