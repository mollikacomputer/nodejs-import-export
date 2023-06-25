const name = "Ranjit Kumar Mandal";
const {orgho, add, multiple} = require('./orgho');
const addResult = add(100, 500);
const gunFol = multiple(252, 12);
// console.log("Gunfol=", gunFol,",", "GogFol =", addResult);

// third party modules underscore

const _=require('underscore');

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
const res = _.pluck(stooges, 'name');

console.log(res);