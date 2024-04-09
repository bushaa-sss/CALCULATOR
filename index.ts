#! /usr/bin/env node

import inquirer from "inquirer";
//[]=array, {}= object
const answer = await inquirer.prompt([
    {
        message: "enter first number",
        type: "number",
        name: "fnum",
    },
    { message: "enter second number",
        type: "number",
        name: "snum" },
    {
        message: "select any operator",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "DIVISION", "SUBTRACTION", "MULTLPICATION"],
    },
]);
if (answer.operator === "ADDITION") {
    console.log(answer.fnum + answer.snum);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.fnum - answer.snum);
}
else if (answer.operator === "MULTLPICATION") {
    console.log(answer.fnum * answer.snum);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.fnum / answer.snum);
}
else {
    console.log("enter valid operator");
}
