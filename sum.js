// Use process.argv to parse arguments and add integers

let tmpArray = process.argv.slice(2, 4);
console.log(tmpArray);

let x = parseInt(tmpArray[0]);
let y = parseInt(tmpArray[1]);
if (Number.isInteger(x) && Number.isInteger(y)) {
  console.log(`x + y = ${x + y}`);
}

function sum(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

sum(x, y);