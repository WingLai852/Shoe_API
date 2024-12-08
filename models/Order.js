const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  shoeSize: { type: Number, required: true },
  lacesColor: { type: String, required: true },
  soleTopColor: { type: String, required: true },
  soleBottomColor: { type: String, required: true },
  texture: { type: String, required: true },
  status: { type: String, default: 'in productie' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
