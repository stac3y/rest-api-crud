const express = require('express');

const userController = require('../controllers/user');
const validationHandler = require('../middleware/validation');

const router = express.Router();

//POST /users
router.post('/users', validationHandler, userController.createUser);

//GET /users
router.get('/users', userController.getUsers);

//GET /users/id/:userId
router.get('/users/id/:userId', userController.getUserById);

//GET /users/name/:userName
router.get('/users/name/:userName', userController.getUserByName);

//PUT /users/:userId
router.put('/users/:userId', validationHandler, userController.updateUser);

//DELETE /users/:userId
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;