const Sequelize = require('sequelize');
require('custom-env').env('staging');

const sequelize = new Sequelize('postgres', process.env.POSTGRES_USERNAME, process.env.POSTGRES_PASSWORD, {
    dialect: 'postgres',
    host: 'localhost',
    schema: 'rest_api'
});

module.exports = sequelize;