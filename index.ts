#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

import chalkAnimation from "chalk-animation";
const rainbow = chalkAnimation.rainbow
("WELCOME IN CURRENCY CONVERTOR APP."); rainbow.start();
setTimeout(( ) => {rainbow.stop();
    console.log('Animation stopped');
}, 5000);

const currency:any = {
    USTD: 1 , // Base currency
    EUR:.92,
    GBP: .96,
    INR: 83.30,
    PKR:280,
    KUDINAR: .31,
    OMRIAL: .38,
    PST: .79,
    AFAFGHANI: 71.23,
    CHYUAN: 7.23
}
let userAnswer = await inquirer.prompt(
    [{
    name: "from",
    message: (chalk.green.bold("From Currency")),
    type: "list",
    choices: ['USTD','EUR', 'GBP', 'INR', 'PKR','KUDINAR','OMRIAL',
        'PST','AFAFGHANI','CHYUAN']
},
{ name: "to",
    message: (chalk.redBright.bold("To currency")),
    type: "list",
    choices: ['USTD','EUR', 'GBP', 'INR', 'PKR','KUDINAR','OMRIAL',
    'PST','AFAFGHANI','CHYUAN']
},
  { name: 'amount',
    message:(chalk.magenta.bold("Enter amount to convert:")),
    type: 'number'
}])
let fromCurrencyAmount = currency[userAnswer.from]
let toCurrencyAmount = currency[userAnswer.to]
let amount = userAnswer.amount // user input to convert
let baseAmount = amount / fromCurrencyAmount  //USTD base currency
//let convertedAmount = baseAmount * toCurrencyAmount
    // converts user input & rounds of upto 2decimalas
let convertedAmount = Math.round((baseAmount * toCurrencyAmount )*100) /100
//console.log(fromCurrencyAmount ); // shows from currency amount
//console.log(toCurrencyAmount); // shows to currency amount
console.log(chalk.yellow.bold.underline("Converted Amount:",convertedAmount)); // shows from converted amount

