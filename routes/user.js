const express = require('express');
const {body} = require('express-validator/check');

const userController = require('../controllers/user');
const User = require('../models/user');

const router = express.Router();
const validationHandler = [body('name')
    .isAlphanumeric()
    .withMessage('Please enter a name with only text and numbers.')
    .custom((value, {req}) => {
        return User
            .findOne({name: value})
            .then(user => {
                if (user) {
                    return  Promise.reject('Username exists already, please pick a different one!')
                }
            })
    })
    .trim(),
    body('email')
        .isEmail()
        .withMessage('Please enter a valid e-mail!')
        .normalizeEmail()
        .trim(),
    body('password', 'Please enter a password with only numbers and text and at least 6 characters.')
        .isLength({min: 6})
        .isAlphanumeric()
        .trim()
]

//POST /user/create-user
router.post('/create-user', validationHandler, userController.createUser);

//GET /user/users
router.get('/users', userController.getUsers);

//GET /user/id/:userId
router.get('/id/:userId', userController.getUserById);

//GET /user/name/:userName
router.get('/name/:userName', userController.getUserByName);

//PUT /user/update-user/:userId
router.put('/update-user/:userId', validationHandler, userController.updateUser);

//DELETE /user/update-user/:userId
router.delete('/delete-user/:userId', userController.deleteUser);

module.exports = router;