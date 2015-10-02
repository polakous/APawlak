/**
 * Created by Administrator on 10/2/2015.
 */
var a = function () {
    console.log('a called');
};

var b = function () {
    console.log('b called');
};

module.exports = {
    a: a,
    b: b
};