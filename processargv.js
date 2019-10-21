"use strict";

let args = [];

for (let j = 0; j < process.argv.length; j++) {
  args.push(process.argv[j]);
  switch (process.argv[j]) {
    case "explode":
      console.log("BOOM!");
      break;
    case "hello":
      console.log("Hello :)");
      break;
    default:
      console.log(process.argv[j]);
  }
}

