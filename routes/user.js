const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

//POST /user/create-user
router.post('/create-user', userController.createUser);

//GET /user/users
router.get('/users', userController.getUsers);

//GET /user/id/:userId
router.get('/id/:userId', userController.getUserById);

//GET /user/name/:userName
router.get('/name/:userName', userController.getUserByName);

//PUT /user/update-user/:userId
router.put('/update-user/:userId', userController.updateUser);

module.exports = router;