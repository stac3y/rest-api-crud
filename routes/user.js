const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

//POST /user/create-user
router.post('/create-user', userController.createUser);

module.exports = router;