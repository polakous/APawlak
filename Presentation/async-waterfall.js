/**
 * Created by Adrian Pawlak on 10/18/2015.
 * for CSC 443 - Internet Programming
 */
var async = require("async");

async.waterfall([
    function(callback) {
        callback(null, 50, 5);
    },
    function(f2a, f2b, callback) {
        callback(null, f2a - f2b );
    },
    function(f3, callback) {
        callback(null, Math.sqrt(f3));
    },
    function(f4, callback) {
        callback(null, f4 - 50);
    }
], function(error, callback) {
    console.log(callback);
});