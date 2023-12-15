// Import Student Controller
const StudentController = require('../controllers/StudentController.js');
// Import express
const express = require('express');
// Membuat object router
const router = express.Router();

/**
 * Membuat routing
 * Method get menerima 2 params.
 * Param 1 adalah endpoint.
 * Param 2 callback
 * Callback menerima object req dan res
 */

router.get('/', (req, res) => {
  res.send('Hello Express');
});

// Routing Student
router.get('/students', StudentController.index);
router.post('/students', StudentController.store);
router.put('/students/:id', StudentController.update);
router.delete('/students/:id', StudentController.destroy);

// Export router
module.exports = router;
