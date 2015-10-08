/**
 * Created by Administrator on 10/1/2015.
 */
var http = require("http");
var mysql = require('mysql');



var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3306',
password: 'password',
    database: 'store'
});


function getPrice(product_id, callback) {
    var get = {id: product_id};
    pool.getConnection(function(err, connection) {
    connection.query('SELECT PRICE FROM PRODUCTS WHERE ?', get, function(err, results) {
        if (!err) {
            if (results[0] != null) {
                callback(null, results[0].PRICE);
            } else {
                callback("Nothing here.", null);
            }
        } else {
            callback(err, null);
        }
        connection.release();
    });
    });
}

function handleRequest(req, res) {

    getPrice(req.url.replace("/", ""), function(err,data){
        var result;
        var httpcode = 200;

        if (err) {
            httpcode = 503;
            result = {
                error_code: 503,
                message: "Product ID: " + req.url.replace("/", "") + " does not exist"
            };
        } else {
            result = {
                product_id: req.url.replace("/", ""),
                price: data
            };
        }
        res.writeHead(httpcode, {"Content-Type": "application/json"});
        res.end(JSON.stringify(result) + "\n");
    });
}
var server = http.createServer(handleRequest);

server.listen(8080);