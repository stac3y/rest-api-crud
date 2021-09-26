const User = require('../models/user');

//create a new user
exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

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
        .catch(err => console.log(err));
}

//get all users
exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json({
                message: 'Users fetched successfully.',
                users: users
            });
        })
        .catch(err => console.log(err));
}

//get user by id
exports.getUserById = (req, res, next) => {
    const userId = req.params.userId;

    User.findByPk(userId)
        .then(user => {
            res.status(200).json({
                message: 'User fetched successfully.',
                user: user
            });
        })
        .catch(err => console.log(err));
}

//get user by name
exports.getUserByName = (req, res, next) => {
    const userName = req.params.userName;

    User.findOne({where: {name: userName}})
        .then(user => {
            res.status(200).json({
                message: 'User fetched successfully.',
                user: user
            });
        })
        .catch(err => console.log(err));
}

//update user by id
exports.updateUser = (req, res, next) => {
    const userId = req.params.userId;

    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    const updatedPassword = req.body.password;

    User.findByPk(userId)
        .then(user => {
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
        .catch(err => console.log(err));
}

//delete user by id
exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;

    User.findByPk(userId)
        .then(user => {
            return user.destroy();
        })
        .then(() => {
            res.status(200).json({
                message: 'User deleted successfully.'
            });
        })
        .catch(err => console.log(err))
}