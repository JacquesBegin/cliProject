// Convert strings that are passed as arguments into pig-latin-ish

let args = process.argv;
for (let x = 2; x < args.length; x++) {
  console.log(`${args[x].slice(1)}${args[x].slice(0, 1)}ay`);
}