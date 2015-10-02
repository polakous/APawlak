/**
 * Created by Administrator on 10/2/2015.
 */
var fs = require('fs');
fs.unlink('./test.txt', function (err) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('test.txt successfully deleted');
    }
});
