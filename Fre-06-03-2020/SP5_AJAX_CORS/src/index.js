import 'bootstrap/dist/css/bootstrap.css'

let map = document.getElementById("svg2");
let url = "http://restcountries.eu/rest/v1/alpha?codes=";

map.addEventListener('click', getCountry);

var prev; //Using hoisting.

function getCountry(event) {
    /*colors the selected country green(Can choose any color). 
    When pressing a new country, it will "un-color" the previouse selected country and color the new country
    Not really a part of the assignment, it just looks cool.*/
    if (prev == null) {
        prev = event;
        event.target.style = "fill: green";
    } else {
        prev.target.style = "fill:#c0c0c0";
        event.target.style = "fill: green";
        prev = event;
    }
    /*
    First it checkes if the click happend inside the map or in the water.
    Then it checks if the selected country has more than 2 letters in its tag name/id, 
    if it has, then it will take the parentElement/Node of said country and fetch these. 
    Expamle england has gb and north irland has gb-nir. 
    This will return north irland as a part of gb and fetch the name england.
    */
    let fURL;
    if (event.target.id != "svg2") {
        if (event.target.id.length > 2) {
            fURL = url + event.target.parentNode.id;
        } else {
            fURL = url + event.target.id
        }

        fetch(fURL) //Fetching the data from the url, either with "normal" target id or the parentElement/Node id of selected country
            .then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data);
                showDataAboutCountry(data);
            });
    } else {
        document.getElementById("mapDetails").innerHTML = "This is water... Ya Idjit" + "<br> <br> <br> <br>"
    }
}
/*Outputs the selected data fetched from the api in the div called "mapDetails" under the map.
Can be found at the bottom of the index.html page under all of the map"stuff"(svg)*/
function showDataAboutCountry(data) {
    let info =
        "Country: " + data[0].name + "<br>" +
        "Population: " + data[0].population + "<br>" +
        "Area: " + data[0].area + "<br>" +
        "Borders: " + data[0].borders;
    document.getElementById("mapDetails").innerHTML = info;
}