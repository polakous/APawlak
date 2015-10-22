/**
 * Created by Adrian Pawlak on 10/22/2015.
 */

var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'password',
    database: 'store'
});

module.exports.dbpool = pool;