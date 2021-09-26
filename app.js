const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRoutes);

sequelize
    .sync()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(8080);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });