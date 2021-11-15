"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели? Введите число!', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    acters: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for(let i = 0; i < 2; i++){
        let a = prompt('Один из просмотренных фильмов', ''),
            b = prompt('На сколько оцените его?','');
    
        if(a != null && b != null &&  a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log(a, b);
        }else{
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Просмотрено мало фильмов.');
    }else if(personalMovieDB.count <= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель.');
    }else if(personalMovieDB.count >= 30){
        console.log('Да, вы, батенька, киноман!');
    }else{
        console.log('Ошибка!');
    } 
}

detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB[privat] === true) {
        console.log(personalMovieDB);
    }
}






// let num = 1;
// while (num <= 2) {

//     let a = prompt('Один из просмотренных фильмов', '');
//         console.log(a);
        
//     let b = prompt('На сколько оцените его?', '');
//     console.log(b);
//     if(a === null || a.length < 5){
//         let num = 1; 
//     }else{
//         personalMovieDB.movies[a] = b;
//         num++;
//     }
// }



// for (let i = 1; i <= 4; i++) {
//     let i = prompt('Один из просмотренных фильмов', '');
//     }
//     console.log(i);
// }



// let a = prompt('Один из просмотренных фильмов', ''),
//     b = prompt('На сколько оцените его?',''),
//     c = prompt('Один из просмотренных фильмов', ''),
//     d = prompt('На сколько оцените его?','');

//  personalMovieDB.movies[a] = b;
//  personalMovieDB.movies[c] = d;

 console.log(personalMovieDB);