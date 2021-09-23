'use strict';

function inc(obj) {
  obj.n++;
}
const obj = ({ n: 7 });
inc(obj);
console.log(obj);

module.exports = { inc };
