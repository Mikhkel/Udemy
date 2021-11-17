"use stricr";

const arr = [1, 22, 13, 14, 5];

arr.sort(compareNum);
console.log(arr);

function compareNum (a, b){
    return a - b;
}

arr.sort();
console.log(arr);

// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);


// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();

// console.log(arr);

// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt ("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products);
// console.log(products.join('; '));