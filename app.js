const express = require('express');

const sequelize = require('./util/database');

const app = express();

sequelize
    .sync()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(8080);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });