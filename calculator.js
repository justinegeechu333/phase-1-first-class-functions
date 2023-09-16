// add = function (val1, val2) {
//   return val1 + val2;
// };

function calculate(operator, val1, val2) {
  // receive operator as call back function
  // val1, val2 is value.
  // invoking operator callback function with val1, val2
  // and return what is the callback function returns
  return operator(val1, val2);
}
function add(val1, val2) {
  return val1 + val2;
}

function sub(val1, val2) {
  return val1 - val2;
}

console.log("calculate add", 4, 3, "==>", calculate(add, 4, 3));
console.log("calculate sub", 4, 3, "==>", calculate(sub, 4, 3));
