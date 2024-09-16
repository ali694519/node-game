const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2} ? \n`, (userInput) => {
    if (parseInt(userInput.trim()) == answer) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect. Please try again. \n');
        rl.prompt();
        rl.on('line', (userInput) => {
            if (parseInt(userInput.trim()) == answer) {
                rl.close();
            } else {
                rl.setPrompt(`Your answer of ${userInput} is Incorrect try again.\n`);
                rl.prompt();
            }
        });
    }
});

rl.on('close', () => {
    console.log('Correct!');
});

