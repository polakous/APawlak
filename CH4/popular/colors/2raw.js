/**
 * Created by Administrator on 10/2/2015.
 */
function getRed(str) {
    var redCode = '\x1b[31m';
    var clearCode = '\x1b[39m';
    return redCode + str + clearCode;
} console.log(getRed('Hello World!'));
