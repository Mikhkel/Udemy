'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 30;
    console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(2, 3));
// console.log(calc(100, 50));



function ret(){
    let num = 42;
    return num;
}

// const anotherNum = ret();
console.log(`Return возвратил ${ret()}`);

const logger = function() {
    console.log('Hello')
};

logger();

const calc = (a, b) => a + b;
const calc2 = (a, b) => {
    console.log('Hello')
    return a + b;
};