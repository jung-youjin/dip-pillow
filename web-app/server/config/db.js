var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'dip-project-test',
    password : '1111',
    database : 'dip-project-test'
});

module.exports = db;