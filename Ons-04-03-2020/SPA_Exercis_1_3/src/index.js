import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

//Finding individual jokes
const getJokeByIDElement = document.getElementById("joke_id");
const jokeByIdBtn = document.getElementById("joke_by_id_btn");
jokeByIdBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const newJokeByIdText = jokes.getJokeById(getJokeByIDElement.value - 1);
    if (newJokeByIdText !== undefined) {
        document.getElementById("joke_id_text").innerHTML = newJokeByIdText;
    } else {
        document.getElementById("joke_id_text").innerHTML = "The only joke here, is you";
    }
});

//Adding new Jokes
const newJokeInsert = document.getElementById("newJoke");
const newJokeBtn = document.getElementById("newJokeBtn");
newJokeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    jokes.addJoke(newJokeInsert.value);
    const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");
});

//2. Small application to display a quote of the hour
const getQoutOfTheHourBtn = document.getElementById("quoteBtn");
getQoutOfTheHourBtn.addEventListener('click', (event) => {
    event.preventDefault();
    fetchFunction();
});

function fetchFunction() {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.joke);
            document.getElementById("myQDiv").innerHTML = data.joke;
        });
};

document.getElementById("clover").addEventListener("click", (event) => {
    document.getElementById("cloverText").innerHTML = "Nej"
});

document.getElementById("north").addEventListener("click", (event) => {
    event.stopPropagation();
    document.getElementById("cloverText").innerHTML = "North"
});

document.getElementById("east").addEventListener("click", (event) => {
    event.stopPropagation();
    document.getElementById("cloverText").innerHTML = "East"
});

document.getElementById("south").addEventListener("click", (event) => {
    event.stopPropagation();
    document.getElementById("cloverText").innerHTML = "South"
});

document.getElementById("west").addEventListener("click", (event) => {
    event.stopPropagation();
    document.getElementById("cloverText").innerHTML = "West"
});