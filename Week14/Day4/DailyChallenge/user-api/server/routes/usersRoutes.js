const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);
router.put('/:id', controller.updateUser);

module.exports = router;
