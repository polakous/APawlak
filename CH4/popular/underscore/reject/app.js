/**
 * Created by Administrator on 10/2/2015.
 */
var _ = require('underscore');
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){
    return num % 2 == 0; });
console.log(odds);

var _ = require('underscore');
var numbers = [10, 5, 100, 2, 1000];
console.log(_.min(numbers));
console.log(_.max(numbers));