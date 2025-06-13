const mongoose = require('mongoose');

const healthCardSchema = new mongoose.Schema({ name: { type: String, required: true }, dob: { type: Date, required: true }, bloodGroup: { type: String }, gender: { type: String }, allergies: [String], conditions: [String], emergencyContact: { name: String, phone: String, relation: String } }, { timestamps: true });

module.exports = mongoose.model('HealthCard', healthCardSchema);

