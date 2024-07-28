import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\nWelcome To Currency Converter Calculator\n"))
// Define the list of surrencies and their exchange rates

let exchange_rate:any = {
    "USD": 1,   // Base Currency (Dollar $)
    "EUR": 0.9, // European Currency (Euro)
    "JEP": 113, // Jepnese Currency (Yen)
    "CAD": 1.3, // Canadian Dollar Currency ($)
    "AUD": 1.65, // Australian Dollar Currency (AUD $)
    "PKR": 280, // Pakistani Currency (Rupee)
}
// Prompt the users to select the currencies to convert from and to
(async () => {
let user_answer = await inquirer.prompt([
    {
        name: "from_Currency",
        type: "list",
        message: "Select the surrency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"Amount",
        type:"Input",
        message:"Enter the amount to convert:",
    }
])

// Perform Currency Conversion By Using Formula
let from_amount = exchange_rate[user_answer.from_Currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.Amount

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount
console.log(`Converted Amount = ${converted_amount}`)
});