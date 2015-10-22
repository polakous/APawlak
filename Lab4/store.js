var http = require("http");
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');


var router = express.Router();
router.use(bodyParser());

router.route('/:id')
    .get(function (req, res, next) {
        getPrice(req.params['id'], function (err, data) {
            if (data) {
                res.send({
                    status: 'Found',
                    item: req.params['id'],
                    price: data
                });
            }
            else {
                res.send(404, {status: 'not Found'});
            }
        });
    })

/**function getPrice(product_id, callback) {
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
*/
//server.listen(8080);

var app = express()
    .use('/price', router)
    .listen(8080);