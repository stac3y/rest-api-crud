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

//get all not deleted users
exports.getUsers = (req, res, next) => {
    User.findAll({where: {deletedAt: null}})
        .then(users => {
            res.status(200).json({
                message: 'Users fetched successfully.',
                users: users
            });
        })
        .catch(err => console.log(err));
}