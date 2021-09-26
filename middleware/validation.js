const {body} = require('express-validator/check');

const User = require('../models/user');

module.exports = [body('name')
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
];