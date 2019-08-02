'use strict';


// let number = 1;
// let string = "String";
// let boolean = true;
// let symbol = Symbol();
// let und = undefined;
// let nullType = null;

// let obj = {
//     name: "Oleksander",
//     age: 15,
//     greeting: function (lastName, surName) {
//         return `Welcome ${lastName} ${surName}!!!`
//     }
// };



let money = prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-02");

let toSpend = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [toSpend]: howMuch
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData);

alert("Бюджет на 1 день рівний " + appData.budget / 30 + " грн.");