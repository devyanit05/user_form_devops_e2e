const express = require('express');
const { createUser } = require('../controllers/userController');
const { getAllUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);

module.exports = router;