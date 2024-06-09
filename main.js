#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";
let input = await inquirer.prompt([{
        name: "Hamzah",
        type: "number",
        message: " Enter time (in seconds): "
    }]);
let time = input.Hamzah;
function startCounter(val) {
    let initialTime = new Date();
    // console.log(initialTime)
    let intervalTime = new Date().setSeconds(initialTime.getSeconds() + (val + 2));
    let intervalTimeFormat = new Date(intervalTime);
    // console.log(intervalTimeFormat)
    setInterval(() => {
        let currTime = new Date();
        let timeDiff = differenceInSeconds(intervalTimeFormat, currTime);
        // console.log(timeDiff)
        if (timeDiff <= 0) {
            console.log(chalk.red("BOOM WILL EXPLOAD IN...."));
            console.log(chalk.red("BOOOOOOOOOOMMM !!!!!!!!!"));
            process.exit();
        }
        let minute = Math.floor(timeDiff / 60);
        let seconds = Math.floor(timeDiff % 60);
        console.clear();
        console.log(chalk.red(`${String(minute).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`));
    }, 1000);
}
startCounter(time);
