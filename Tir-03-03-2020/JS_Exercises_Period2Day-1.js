//1) Using existing functions that takes a callback as an argument

//1a
console.log("//1a");
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
let namesWithA = names.filter(function(element) {
    return element.includes("a");
})

console.log(namesWithA);
console.log();
console.log("//1b");

//1b
let reversedNames = names.map(function(element) {
    let splitElement = element.split("");
    //console.log(splitElement);
    let reversedElement = splitElement.reverse();
    //console.log(reversedElement);
    let joinedElement = reversedElement.join("");
    //console.log(joinedElement);
    return joinedElement;

});

console.log(reversedNames);
console.log();

//2) Implement user defined functions that take callbacks as an argument

//2a
console.log("//2a");

function myFilter(array, callback) {
    let addToThis = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            addToThis.push(array[i]);
        }
    }
    return addToThis;

};

function filterNameWith(name) {
    return name.includes("a" || "A");
};
console.log(myFilter(names, filterNameWith));
console.log();

//2b
console.log("//2b");

function myMap(array, callback) {
    let addToThis = [];
    for (let i = 0; i < array.length; i++) {
        addToThis.push(callback(array[i]));
    }
    return addToThis;
};

function nameBackwards(name) {
    return name.split("").reverse().join("");
};
console.log(myMap(names, nameBackwards));
console.log();



//4) Getting really comfortable with filter and map
//4a
console.log("//4a");
let numbers = [1, 3, 5, 10, 11];
let addTheNextNumber = numbers.map(function(element, index, array) {
    if (index + 1 > array.length - 1) {
        return element;
    } else {
        return element + array[index + 1];
    }
});
console.log(addTheNextNumber);
console.log();

//4b
console.log("//4b");
let namesMap = names.map(function(element) {
    return "<a href=””>" + element + "</a>";
}).join("");
console.log("<nav>" + namesMap + "</nav>");
console.log();

//4c
console.log("//4c");
let namesAndPhone = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

function insertIntoTable(elementObj) {
    let tableHead = "<tr><th>Name</th>" + "<th>Phone</th></tr>";
    let htmlRows = "<tr>";
    elementObj.forEach(e => {
        let temp = Object.values(e).map(function(a) {
            return "<td>" + a + "</td>";
        }).join("") + "</tr>";
        htmlRows += temp;
    });
    return "<table border='1'>" + tableHead + htmlRows + "</table>";
};

console.log(insertIntoTable(namesAndPhone));
console.log();

//4d
console.log("//4d - Se HTML og indkommenter document.blablabla");
document.getElementById("myDiv1").innerHTML = insertIntoTable(namesAndPhone); //Den kommer med en eller anden fejl uden grund :/
document.getElementById("myDiv2").innerHTML = "<nav>" + namesMap + "</nav>";
console.log();

//4e
console.log("//4e - Se HTML og indkommenter document.blabla")

function nameName(name) {
    return name.name.includes("a" || "A");

};

function clicker() {
    document.getElementById("myDiv1").innerHTML = insertIntoTable(myFilter(namesAndPhone, nameName))
};

function clickerRld() {
    document.getElementById("myDiv1").innerHTML = insertIntoTable(namesAndPhone);

};

document.getElementById("myBtnFA").addEventListener("click", clicker);
document.getElementById("myBtnRld").addEventListener("click", clickerRld);
console.log();

//5) Reduce
//5a
console.log("//5a");
let all = ["Lars", "Peter", "Jan", "Bo"];

let withItAll = all.join(", #");
console.log("#" + withItAll);
console.log();

//5b
console.log("//5b");
let numbersForRed = [2, 3, 67, 33]

function reducer(total, num) {
    return total + num;
}
console.log(numbersForRed.reduce(reducer));
console.log();