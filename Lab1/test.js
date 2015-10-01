/**
 * Created by Administrator on 9/17/2015.
 */
var http = require("http");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'store'
});

connection.connect(function(err){
   if(!err) {
       console.log("Database is all good .. \n\n");
   } else {
       console.log("Something is messed up with database .. \n\n");
   }
});

function getPrice(product_id, callback) {
    var get = {id: product_id};
    connection.query('SELECT PRICE FROM PRODUCTS WHERE ?', get, function(err, results) {
        if(!err) {
            if(results[0] !=null) {
                callback(null, results[0].PRICE);
            } else {
                callback("Nothing here.", null);
            }
        } else {
            callback(err, null);
        }
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

/*var server = http.createServer(function(request, response) {

    var test1 = {product_id:"1234567", price:"$99.99"};
    var test2 = {product_id:"5555555", price:"$4.99"};
    var test3 = {product_id:"8888888", price:"$19.99"};
    var result = {error: "test"};
    console.log("Incoming: (" + request.method + ")" + request.url);
    response.writeHead(200,{"Content type" : "application/json"});



//    response.end(JSON.stringify(test1));
    if(request.url == "/1234567"){
        result = JSON.stringify(test1);
    } else if (request.url == "/5555555") {
        result = JSON.stringify(test2);
    } else if (request.url == "/8888888") {
        result = JSON.stringify(test3);
    }

    response.end(result);


});*/

server.listen(8080);
