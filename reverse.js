// Reverse strings that are passed as arguments

let args = process.argv;
for (let x = 2; x < args.length; x++) {
  let tmp = "";
  for (let y = 0; y < args[x].length; y++) {
    tmp = args[x][y] + tmp;
  }
  console.log(tmp);
}