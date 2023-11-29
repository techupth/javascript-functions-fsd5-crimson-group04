// Start coding here
//1
let add = (a, b) => {
  return a + b;
};
let addResult = add(10, 20);

console.log(addResult);

//2

let subtract = (a, b) => {
  return a - b;
};
let resultSubstract = subtract(10, 5);
console.log(resultSubstract);

//3

let multiply = (a, b) => {
  return a * b;
};
let resultMultiply = multiply(10, 5);
console.log(resultMultiply);

//4

let divide = (a, b) => {
  return a / b;
};
let divideResult = divide(3000, 10);
console.log(divideResult);

let calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};
