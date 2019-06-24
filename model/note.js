var Sequelize = require('sequelize')

var sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',

    storage: '../database/database.sqlite'
});

sequelize
    .authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable yo connect to the datebase', err);
    })