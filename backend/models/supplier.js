const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
  supplier_id: { type: String, required: true, unique: true },
  company_name: { type: String, required: true },
  website: { type: String, required: true },
  location: { type: String, required: true },
  nature_of_business: {
    type: String,
    required: true,
    enum: ['small_scale', 'medium_scale', 'large_scale'],
  },
  manufacturing_processes: {
    type: [String],
    required: true,
    enum: ['moulding', '3d_printing', 'casting', 'coating'],
  },
});

const Supplier = mongoose.model('Supplier', SupplierSchema);
module.exports = Supplier;
