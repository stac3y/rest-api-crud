const express = require('express');
const {body} = require('express-validator/check');

const userController = require('../controllers/user');

const router = express.Router();

//POST /user/create-user
router.post('/create-user',
    [body('name', 'Please enter a name with only text and numbers.')
        .isAlphanumeric()
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
    ], userController.createUser);

//GET /user/users
router.get('/users', userController.getUsers);

//GET /user/id/:userId
router.get('/id/:userId', userController.getUserById);

//GET /user/name/:userName
router.get('/name/:userName', userController.getUserByName);

//PUT /user/update-user/:userId
router.put('/update-user/:userId',
    [body('name', 'Please enter a name with only text and numbers.')
        .isAlphanumeric()
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
    ], userController.updateUser);

//DELETE /user/update-user/:userId
router.delete('/delete-user/:userId', userController.deleteUser);

module.exports = router;