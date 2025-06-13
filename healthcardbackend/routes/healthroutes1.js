const express = require('express'); 
const router = express.Router();
 const healthController = require('../controllers/healthController');

// Routes router.post('/', healthController.createCard);    
//      // Create card router.get('/:id', healthController.getCard);  
//         // Get card by ID

module.exports = router