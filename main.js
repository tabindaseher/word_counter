#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue(" Welcome TO My New Project WORD COUNTER"));
const answer = await inquirer.prompt([{
        name: 'sentence',
        type: 'input',
        message: chalk.green('Enter a sentence to count the word'),
    }]);
let words = answer.sentence.trim().split(' ');
//print the array of words to console .
console.log(words);
//print the total length of my word
console.log('Total words of your sentence = ', chalk.yellow(words.length));
