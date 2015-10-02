/**
 * Created by Administrator on 10/2/2015.
 */
var argv = require('optimist').argv;
delete argv['$0'];
console.log(argv);
