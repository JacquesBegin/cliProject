#!/usr/bin/env node

const yargs = require("yargs");
// const fetch = require("node-fetch");
const axios = require("axios");

const options = yargs
.usage("Usage: -n <name>")
.option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
.option("s", { alias: "search", describe: "Search term", type: "string" })
.argv;

const greeting = `Hello, ${options.name}!`;
console.log(greeting);

if (options.search) {
  console.log(`Searching for jokes about ${options.search}...`)
} else {
  console.log("Here's a random joke for you:");
}


const url = options.search ? `https://icanhazdadjoke.com/search?term=${escape(options.search)}` : "https://icanhazdadjoke.com/";

// fetch(url, { headers: { 'Accept': 'application/json' } })
// .then(res => {
//   console.log(res);
// });

axios.get(url, { headers: { Accept: "application/json" } })
  .then(res => {
    if (options.search) {
      res.data.results.forEach( j => {
        console.log("\n" + j.joke);
      });
      if (res.data.results.length === 0) {
        console.log("no jokes found :(");
      }
    } else {
      console.log(res.data.joke);
    }
  });



// The code below uses the yargs package to parse command line arguments.

// const chalk = require("chalk");
// const boxen = require("boxen");
// const yargs = require("yargs");

// const options = yargs
// .usage("Usage: -n <name>")
// .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
// .argv;

// const greeting = `Hello ${options.name}!`;

// console.log(greeting);



// The code below modifies the output design of the command line.

// const greeting = chalk.white.bold("Hello!");

// const boxenOptions = {
//   padding: 1,
//   margin: 1,
//   borderStyle: "round",
//   borderColor: "green",
//   backgroundColor: "#555555"
// };

// const msgBox = boxen(greeting, boxenOptions);

// console.log(msgBox);