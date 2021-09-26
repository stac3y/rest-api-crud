const express = require('express');

const userController = require('../controllers/user');
const validationHandler = require('../middleware/validation');

const router = express.Router();

//POST /user/create-user
router.post('/users', validationHandler, userController.createUser);

//GET /user/users
router.get('/users', userController.getUsers);

//GET /user/id/:userId
router.get('/users/id/:userId', userController.getUserById);

//GET /user/name/:userName
router.get('users/name/:userName', userController.getUserByName);

//PUT /user/update-user/:userId
router.put('/users/:userId', validationHandler, userController.updateUser);

//DELETE /user/update-user/:userId
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;