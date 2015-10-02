/**
 * Created by Administrator on 10/2/2015.
 */
var rimraf = require('rimraf');
rimraf('./foo', function (err) {
    if (err) console.log('Error occured:', err);
    else console.log('Directory foo deleted!');
})
