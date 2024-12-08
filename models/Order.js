const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  shoeSize: Number,
  lacesColor: String,
  soleTopColor: String,
  soleBottomColor: String,
  texture: String,
  status: { type: String, default: 'in productie' },
});

module.exports = mongoose.model('Order', orderSchema);
