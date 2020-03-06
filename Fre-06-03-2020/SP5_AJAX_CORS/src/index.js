import 'bootstrap/dist/css/bootstrap.css'

let map = document.getElementById("svg2");
let url = "http://restcountries.eu/rest/v1/alpha?codes=";

map.addEventListener('click', getCountry);

var prev;

function getCountry(event) {
    if (prev == null) {
        prev = event;
        event.target.style = "fill: green";
    } else {
        prev.target.style = "fill:#c0c0c0";
        event.target.style = "fill: green";
        prev = event;
    }
    let fURL;
    if (event.target.id != "svg2") {
        if (event.target.id.length > 2) {
            fURL = url + event.target.parentNode.id;
        } else {
            fURL = url + event.target.id
        }

        fetch(fURL)
            .then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data);
                showDataAboutCountry(data);
            });
    }
}

function showDataAboutCountry(data) {
    let info =
        "Country: " + data[0].name + "<br>" +
        "Population: " + data[0].population + "<br>" +
        "Area: " + data[0].area + "<br>" +
        "Borders: " + data[0].borders;
    document.getElementById("mapDetails").innerHTML = info;
}