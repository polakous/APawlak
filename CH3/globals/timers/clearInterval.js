/**
 * Created by Administrator on 10/2/2015.
 */
var count = 0;
var intervalObject = setInterval(function () {
    count++;
    console.log(count, 'seconds passed');
    if (count == 5) { console.log('exiting');
        clearInterval(intervalObject);
    }
}, 1000);
