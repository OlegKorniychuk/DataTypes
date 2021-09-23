'use strict';

function fn() {
  a = 10;
  var a;
  return a;
}
console.log(fn());

module.exports = { fn };
