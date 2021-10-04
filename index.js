import moment from 'moment';
const math = require('mathjs');

console.log("Hello from JavaScript!");
let startOfHour = moment().startOf('hour').fromNow();
console.log(startOfHour);

let logResult = math.log(10000, 10);
console.log(logResult);

var name = "Susan", time = "tomorrow";
console.log(`Hello ${name}, how are you ${time}?`);