/**
 * Created by Administrator on 10/2/2015.
 */
var fs = require('fs');
try {
    fs.unlinkSync('./test.txt');
    console.log('test.txt successfully deleted');
} catch (err) {
    console.log('Error:', err);
}
