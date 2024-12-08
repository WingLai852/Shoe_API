const Order = require('../models/Order');

// Voeg een nieuwe bestelling toe
exports.addOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    res.status(201).json({
      status: 'success',
      data: newOrder,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Haal alle bestellingen op
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ status: 'success', data: orders });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Haal een specifieke bestelling op
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ status: 'fail', message: 'Bestelling niet gevonden' });
    }
    res.status(200).json({ status: 'success', data: order });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Update een bestelling
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ status: 'success', data: updatedOrder });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Verwijder een bestelling
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 'success', message: 'Bestelling verwijderd' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
