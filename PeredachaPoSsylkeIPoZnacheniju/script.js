"use strict";

// let a = 5;
// let b = a;

// b = b + 5;

// console.log(a);
// console.log(b);

// function copy(mainObj) {
//     let newObj = {};
//     let key;

//     for (key in mainObj) {
//         newObj[key] = mainObj[key];
//     }

//     return newObj;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 90;
// newNumbers.c.x = 60;

// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);

// clone.d = 88;

// console.log(add);
// console.log(clone);


// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[1] = 'f';

// console.log(oldArr);
// console.log(newArr);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [1, 2, 3];

// log(...num);


const arr = ['a', 'b'];

const newArr = [...arr];

console.log(newArr);

const g = {
    one: 1,
    two: 2
};

const newObj = {...g};

console.log(newObj);