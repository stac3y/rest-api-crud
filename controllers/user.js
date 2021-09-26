const User = require('../models/user');

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
                message: 'User created successfully!',
                user: user
            })
        })
        .catch(err => console.log(err));
}