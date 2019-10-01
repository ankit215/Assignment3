console.log('Here the program starts');

var async = require('async');
async.waterfall([
    function (callback) {
        console.log('hey this is first function');
        callback(null, '1', '2');
    },
    function (arg1, arg2, callback) {
        console.log('hey this is second function' + arg1 + ' ' + arg2);
        callback(null, '3');
    },
    function (arg1, callback) {
        console.log('hey this is Third Function' + arg1);
        callback(null, 'final gffd');
    }
], function (err, result) {
    console.log('Main Callback>' + result);
});

console.log('Here the Program Ends');