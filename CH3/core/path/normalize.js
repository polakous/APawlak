/**
 * Created by Administrator on 10/2/2015.
 */
var path = require('path');
console.log(path.normalize('/foo/bar/..'));
console.log(path.normalize('/foo//bar/bas/..'));
