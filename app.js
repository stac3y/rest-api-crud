const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

sequelize
    .sync()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(8080);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });