// Use process.argv to parse arguments and add integers
let x = parseInt(process.argv[2]);
let y = parseInt(process.argv[3]);
if (Number.isInteger(x) && Number.isInteger(y)) {
  console.log(`x + y = ${x + y}`);
}
