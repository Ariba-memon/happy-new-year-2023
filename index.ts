#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";



figlet.defaults({ fontPath: "assets/fonts" });



function ready() {
    console.log(figlet.textSync('Happy New Year 2023'));


}

ready()





async function askQuestionone() {
    let answers = await inquirer
        .prompt([
            /* Pass your questions in here */

            {
                type: "name",
                name: "Name",
                message: "Enter Your Name:"
            },
            {
                type: "name",
                name: "SecondName",
                message: "Name of a Person You Want to Wish a Happy New Year:"
            },

        ])


    console.log(chalk.blue.bgRed.bold(`Welcome To New Year 2023 To my Friend ${answers.SecondName} Wishing you a very happy New Year! May your 2023 be filled with love & Success Ameen`))
    console.log(chalk.hex('#DEADED').bold(`From  ${answers.Name}`))
}




async function startAgain() {
    do {

        await askQuestionone();

        var again = await inquirer
            .prompt({
                type: "input",
                name: "restart",
                message: "Do you want to continue? Press y or n:"
            })
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES')
}
startAgain()