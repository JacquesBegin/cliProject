// Use process.argv to parse arguments and add integers

let tmpArray = process.argv.slice(2, 4);
console.log(tmpArray);

let x = parseInt(tmpArray[0]);
let y = parseInt(tmpArray[1]);
if (Number.isInteger(x) && Number.isInteger(y)) {
  console.log(`x + y = ${x + y}`);
}
