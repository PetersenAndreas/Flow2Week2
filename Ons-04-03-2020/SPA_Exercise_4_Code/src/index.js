import 'bootstrap/dist/css/bootstrap.css'

fetchFunction("http://localhost:3333/api/users/", insertAllUsersInTable);

//Found out after a while that this is shit. Dont do this. Fetch all the time, any time
function fetchFunction(fetchUrl, callback) {
    fetch(fetchUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            callback(data);
        });
};

function insertAllUsersInTable(dataArray) {
    let printString = createTableFromArray(dataArray);
    document.getElementById("showUsersText").innerHTML = printString;
};

function createTableFromArray(array) {
    let tableHead = "<tr><th>ID</th>" + "<th>Age</th>" + "<th>Name</th>" + "<th>Gender</th>" + "<th>Email</th>";
    let htmlRows = "";
    console.log(array);
    array.forEach(element => {
        let temp = "<tr>" +
            "<td>" + element.id + "</td>" +
            "<td>" + element.age + "</td>" +
            "<td>" + element.name + "</td>" +
            "<td>" + element.gender + "</td>" +
            "<td>" + element.email + "</td>" + "<tr>"
        htmlRows += temp;

    });

    return "<table border='1'>" + tableHead + htmlRows + "</table>";
};

document.getElementById("searchBtn").addEventListener('click', searchOne);

function searchOne() {
    fetchFunction("http://localhost:3333/api/users/" + document.getElementById("searchText").value, fetchOneUser);
}

function fetchOneUser(dataArray) {
    let array = [];
    array.push(dataArray);
    let printString = createTableFromArray(array);
    document.getElementById("userFound").innerHTML = printString;
};

document.getElementById("addBtn").addEventListener('click', addUser);

function addUser() {
    let addName = document.getElementById("addNameText").value;
    let addAge = document.getElementById("addAgeText").value;
    let addGender = document.getElementById("addGenderText").value;
    let addEmail = document.getElementById("addEmailText").value;

    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: addName,
            age: addAge,
            gender: addGender,
            email: addEmail
        })
    }

    fetch("http://localhost:3333/api/users/", options);
    fetchFunction("http://localhost:3333/api/users/", insertAllUsersInTable);
}

document.getElementById("deleteBtn").addEventListener('click', deleteUser);

function deleteUser() {
    let getId = document.getElementById("removeIdText").value;

    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch("http://localhost:3333/api/users/" + getId, options);
    fetchFunction("http://localhost:3333/api/users/", insertAllUsersInTable);

}

document.getElementById("editBtn").addEventListener('click', editUser);

function editUser() { //it works, you just have to fill out all of the details.
    let getId = document.getElementById("editIdText").value;
    let editName = document.getElementById("editNameText").value;
    let editAge = document.getElementById("editAgeText").value;
    let editGender = document.getElementById("editGenderText").value;
    let editEmail = document.getElementById("editEmailText").value;

    let options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: editName,
            age: editAge,
            gender: editGender,
            email: editEmail
        })
    }

    fetch("http://localhost:3333/api/users/" + getId, options);
    fetchFunction("http://localhost:3333/api/users/", insertAllUsersInTable);
}


/*Graveyard...
//let getUser = document.getElementById("searchText").value;
//console.log(getUser);
//const userByIdBtn = document.getElementById("searchBtn");
//userByIdBtn.addEventListener('click', insertSpecificUser);
//let getUser = document.getElementById("searchText").value;

//callback
/*function insertSpecificUser(dataArray) {
    let printString = [];
    printString.push(dataArray);
    console.log(dataArray);
    printString = createTableFromArray(printString);
    document.getElementById("userFound").innerHTML = printString;
    fetchFunction("http://localhost:3333/api/users/" + document.getElementById("searchText").value, );
}*/


//Shits dead - fjernet fra createTableFromArray
/*if (array.length > 1) {
                array.forEach(e => {
                    let temp = Object.values(e).map(function(a) {
                        return "<td>" + a + "</td>";
                    }).join("") + "</tr>";
                    htmlRows += temp;
                });
            } else {
                e => {
                    let temp = Object.values(e).map(function(a) {
                        return "<td>" + a + "</td>";
                    }).join("") + "</tr>";
                    htmlRows += temp;
                }
            }
*/