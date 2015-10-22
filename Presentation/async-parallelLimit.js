/**
 * Created by Adrian Pawlak on 10/18/2015.
 * for CSC 443 - Internet Programming
 */

var async = require("async");

async.parallelLimit([
    function(callback) {
        setTimeout(function() {
            console.log('Job #1 is completed (delay - 500)');
            callback(null, 1);
        }, 500);
    },
    function(callback) {
        setTimeout(function() {
            console.log('Job #2 is completed (delay - 499)');
            callback(null, 2);
        }, 499);
    },
    function(callback) {
        setTimeout(function() {
            console.log('Job #3 is completed (delay - 120)');
            callback(null, 3);
        }, 120);
    },
    function(callback) {
        setTimeout(function() {
            console.log('Job #4 is completed (delay - 200)');
            callback(null, 4);
        }, 200);
    }
], 3);