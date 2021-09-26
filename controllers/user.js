const { validationResult } = require('express-validator/check');

const User = require('../models/user');

//create a new user
exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        const error = new Error(errors.array()[0].msg);
        error.statusCode = 422;
        throw error;
    }

    User.create({
        name: name,
        email: email,
        password: password
    })
        .then(user => {
            res.status(201).json({
                message: 'User created successfully.',
                user: user
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

//get all users
exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            if (!users) {
                const error = new Error('Could not find users.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: 'Users fetched successfully.',
                users: users
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

//get user by id
exports.getUserById = (req, res, next) => {
    const userId = req.params.userId;

    User.findByPk(userId)
        .then(user => {
            if (!user) {
                const error = new Error('Could not find user.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: 'User fetched successfully.',
                user: user
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

//get user by name
exports.getUserByName = (req, res, next) => {
    const userName = req.params.userName;

    User.findOne({where: {name: userName}})
        .then(user => {
            if (!user) {
                const error = new Error('Could not find user.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: 'User fetched successfully.',
                user: user
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

//update user by id
exports.updateUser = (req, res, next) => {
    const userId = req.params.userId;

    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    const updatedPassword = req.body.password;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        const error = new Error(errors.array()[0].msg);
        error.statusCode = 422;
        throw error;
    }

    User.findByPk(userId)
        .then(user => {
            if (!user) {
                const error = new Error('Could not find user.');
                error.statusCode = 404;
                throw error;
            }
            user.name = updatedName;
            user.email = updatedEmail;
            user.password = updatedPassword;

            return user.save();
        })
        .then(updatedUser => {
            res.status(200).json({
                message: 'User updated successfully.',
                user: updatedUser
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

//delete user by id
exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;

    User.findByPk(userId)
        .then(user => {
            if (!user) {
                const error = new Error('Could not find user.');
                error.statusCode = 404;
                throw error;
            }
            return user.destroy();
        })
        .then(() => {
            res.status(200).json({
                message: 'User deleted successfully.'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}