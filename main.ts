#! /user/bin/env node
import inquirer from "inquirer";

let Currency_value :{[key:string]:number} ={
    USD: 1,
    UAE: 75.65,
    PKR:277.86, 
}
 
let ans = await inquirer.prompt([
{ 
    type: "list",
    name: "from",
    message: "converting from",
    choices: ["PKR","UAE","USD"]

},
{
    type: "list",
    name: "to",
    message: "converting to",
    choices: ["PKR","UAE","USD"]
},
{
    type: "number",
    name: "amount",
    message: "your amount to convert",
    

}

])
console.log(Currency_value[ans.to]/Currency_value[ans.from]*ans.amount);
