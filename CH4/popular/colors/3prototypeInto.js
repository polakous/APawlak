/**
 * Created by Administrator on 10/2/2015.
 */
Array.prototype.foo = 123;
Number.prototype.foo = 123;
String.prototype.foo = 123;
var arr = [];
var str = '';
var num = 1;
console.log(arr.foo);
console.log(str.foo);
console.log(num.foo);