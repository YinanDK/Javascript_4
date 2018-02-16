"use strict";
let numbers = [1, 2, 3, 4];
const btnStep = document.getElementById("loadResults");
btnStep.addEventListener("click", resultsDisplay);


function resultsDisplay(event) {

    console.log(numbers.filter(x => x % 2 !== 0).map(x => x * 2));
    let newNumbers = numbers.filter(x => x % 2 !== 0).map(x => x * 2);


    console.log("The doubled numbers are", newNumbers); // [2, 6]
    // document.getElementById("arrayDisplay").innerHTML = newNumbers;
    const AccountNum = document.querySelector("#NumAccount");
            AccountNum.value = newNumbers;
}







// fetch data from Api
function fetchJsonData(url, callBackFunction) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        callBackFunction(JSON.parse(request.responseText));
    });

    request.open('get', url);
    request.send();
}

//load movie
// var att = document.createAttribute("tag");       // Create a "class" attribute
// att.value = ["good", "average", "Bad" ]; 
const url = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

const goodMovieBtn = document.getElementById("goodMovieBtn");
const aveMovieBtn = document.getElementById("aveMovieBtn");
const badMovieBtn = document.getElementById("badMovieBtn");
const AverageRatingBtn = document.getElementById("AverageRatingBtn");
const MovieAccountingsNum = document.getElementById("MoviesNum");

const specialMovieBtn = document.getElementById("specialMovies");
const keywords = ["The", "dog", "who", "is", "not", "a", "man"];

const oldMoviesNum = document.getElementById("oldMovies");

goodMovieBtn.addEventListener("click", function() { loadMovies(4, 11, 1) }, false);
aveMovieBtn.addEventListener("click", function() { loadMovies(4, 7, 1) }, false);
badMovieBtn.addEventListener("click", function() { loadMovies(0, 4, 1) }, false);
AverageRatingBtn.addEventListener("click", aveRatingCalculation);
specialMovieBtn.addEventListener("click", countSpecialMovies);
oldMoviesNum.addEventListener("click", function() { loadMovies(1980, 1989, 2) }, false)

function loadMovies(leftRange, rightRange, factor) {

    fetchJsonData(url, function(data) {
        let movies = [];
        movies = data;
        console.log(movies);
        let filteredMovies = null;
        if (factor == 1) {
            filteredMovies = movies.filter(x => x.rating >= leftRange && x.rating <= rightRange);
            movielistDisplay(filteredMovies);
            const movieAccountNum = document.querySelector("#moviesAccountingNum");
            movieAccountNum.value = filteredMovies.length;

        } else if (factor == 2) {
            filteredMovies = movies.filter(x => x.year >= leftRange && x.year <= rightRange);
            console.log(filteredMovies);
            movielistDisplay(filteredMovies);
            const movieAccountNum = document.querySelector("#oldMoviesAccount");
            movieAccountNum.value = filteredMovies.length;

        }


    })


}



function movielistDisplay(movies) {
    const movieList = document.querySelector("#arrayDisplay");
    movieList.innerHTML = "<ul></ul>";
    const totalMovie = movies.map(createList);
}

function createList(item) {
    const movieList = document.querySelector("#arrayDisplay");
    let listContent = document.createElement('li');
    listContent.innerHTML = "Title:" + item.title  + " Rating:" + item.rating  + " Year:" + item.year;
    movieList.appendChild(listContent);
}



function aveRatingCalculation(event) {
    let movies = [];
    let rating = null;
    fetchJsonData(url, function(data) {
        movies = data;
        movies.map((x) => {
            rating += x.rating
            return rating;
        })

        let averageRating = rating / movies.length;
        const aveRatingInfo = document.getElementById("aveRatingInfo");
        aveRatingInfo.value = averageRating;


    })
}

function countSpecialMovies(event) {
    let movies = [];
    fetchJsonData(url, function(data) {
        movies = data;

        const specialmovies = movies.filter(movie => {
            const eachMovie = movie.title.toLowerCase().split(/[^\w]/);
            // return keywords.some(keyword => eachMovie.includes(keyword.toLowerCase()));   
            return keywords.some(keyword => eachMovie.some(item => item == keyword.toLowerCase()));
        });

        console.log(specialmovies);
        const specialMoviesAccount = document.getElementById("specialMoviesAccount");
        specialMoviesAccount.value = specialmovies.length;
    })
}