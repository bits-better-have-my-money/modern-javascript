var moment = require('moment');
var math = require('mathjs');

console.log("Hello from JavaScript!");
var startOfHour = moment().startOf('hour').fromNow();
console.log(startOfHour);

var logResult = math.log(10000, 10);
console.log(logResult);