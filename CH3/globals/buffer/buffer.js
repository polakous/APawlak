/**
 * Created by Administrator on 10/2/2015.
 */
var str = "Hello Buffer World!";
var buffer = new Buffer(str, 'utf-8');
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip);