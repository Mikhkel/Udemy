"use strict";

const personalMovieDB = {
    count: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели? Введите число!', '');
        }

        function detectPersonalLevel() {
            if (personalMovieDB.count < 10){
                console.log('Просмотрено мало фильмов.');
            }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
                console.log('Вы классический зритель.');
            }else if(personalMovieDB.count >= 30){
                console.log('Да, вы, батенька, киноман!');
            }else{
                console.log('Ошибка!');
            } 
        }
        
        detectPersonalLevel();
    } ,

    movies: function() {
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
    },

    acters: {},

    genres: function () {
        for(let i = 0; i < 2; i++){
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${(i+1)}`, '');
            while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null){
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${(i+1)}`, '');
        }
    }},

    privat: true,

    toggleVisibleMyDB: function(){
        personalMovieDB.privat = !personalMovieDB.privat;
    }

};

personalMovieDB.count();

personalMovieDB.movies();

personalMovieDB.genres();

personalMovieDB.toggleVisibleMyDB();


personalMovieDB.genres.forEach(element => {
    console.log(`Ваш любимый жанр ${element}`)
});

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);





// function showMyDB() {
//     if(!personalMovieDB.privat) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();








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
