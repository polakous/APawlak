/**
 * Created by Administrator on 10/2/2015.
 */
var date = new Date(Date.UTC(2007, 0, 1));
console.log('Original', date);
var jsonString = date.toJSON(); console.log(jsonString);
console.log('Round Tripped',new Date(jsonString));
