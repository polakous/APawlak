/**
 * Created by Administrator on 10/2/2015.
 */
var foo = {};
var bar = { 'foo': foo };
console.log(JSON.stringify(bar));
foo.toJSON = function () {
    return "custom" };
console.log(JSON.stringify(bar));