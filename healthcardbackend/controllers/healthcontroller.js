const HealthCard = require('../models/HealthCard');

// Create a health card exports.createCard = async (req, res) => { try { const card = new HealthCard(req.body); await card.save(); res.status(201).json(card); } catch (err) { res.status(500).json({ error: err.message }); } };

// Get a health card by ID exports.getCard = async (req, res) => { try { const card = await HealthCard.findById(req.params.id); if (!card) { return res.status(404).json({ message: 'Card not found' }); } res.json(card); } catch (err) { res.status(500).json({ error: err.message }); } };

