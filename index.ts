#!/usr/bin/env node

// Countdown Timer Project

import chalk from "chalk";

// Function for countdown timer
function* countdownTimer(seconds: number) {
    while (seconds > 0) {
        yield seconds;
        seconds--;
    }
}

// Counter timing initialization
let timerIterator = countdownTimer(10);

// Function to create a countdown timer
function displayCountdown() {
    let result = timerIterator.next();

    if (!result.done) {
        console.log(chalk.greenBright(`Remaining Seconds: ${result.value}`));
        setTimeout(displayCountdown, 1000); // 1 second = 1000 milliseconds
    } else {
        console.log(chalk.whiteBright("Countdown Completed!"));
    }
}

// Invoke
displayCountdown();
