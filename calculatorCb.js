function retOperator(operator) {
  if (operator === "+") {
    // add function (named function)
    function add(val1, val2) {
      return val1 + val2;
    }
    return add;
  } else if (operator === "-") {
    // sub function (anonymous function)
    return function (val1, val2) {
      return val1 - val2;
    };
  }
}

function calculate(operator, val1, val2) {
  return operator(val1, val2);
}

console.log(" +", 4, 3, "==>", calculate(retOperator("+"), 4, 3));
console.log(" -", 4, 3, "==>", calculate(retOperator("-"), 4, 3));
// console.log(" -", 4, 3, "==>", calculate(anonymous-function, 4, 3));
calculate((val1, val2) => val1 * val2, 3, 4);
calculate(
  function (val1, val2) {
    return val1 * val2;
  },
  3,
  4
);
