'use strict';


let number = 1;
let string = "String";
let boolean = true;
let symbol = Symbol();
let und = undefined;
let nullType = null;

let obj = {
    name: "Oleksander",
    age: 15,
    greeting: function (lastName, surName) {
        return `Welcome ${lastName} ${surName}!!!`
    }
};

let mass = ["black", "green", 'pink'];

console.log(5 - 3 + 2);

console.log(mass[1]);

console.log(obj["greeting"]('Aleks', 'Bojko'));